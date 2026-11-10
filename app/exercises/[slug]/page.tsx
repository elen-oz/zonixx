import { notFound } from 'next/navigation';
import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import { exerciseOptions, youtubeOptions, fetchData } from '@/lib/fetchData';
import type { Exercise, YoutubeVideo } from '@/types/api';

export default async function ExerciseDetailPage({ params }: { params: { slug: string } }) {
  try {
    const exerciseDetail = await fetchData<Exercise>(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.slug}`,
      exerciseOptions,
    );

    if (!exerciseDetail) {
      return notFound();
    }

    interface YouTubeSearchResult {
      contents: YoutubeVideo[];
      estimatedResults: string;
      next: string;
    }

    const { contents: exerciseVideos } = (await fetchData<YouTubeSearchResult>(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
      youtubeOptions,
    )) as YouTubeSearchResult;

    const targetMuscleExercises = (await fetchData<Exercise[]>(
      `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}?limit=2000&offset=0`,
      exerciseOptions,
    )) as Exercise[];
    const equipmentExercises = (await fetchData<Exercise[]>(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}?limit=2000&offset=0`,
      exerciseOptions,
    )) as Exercise[];

    return (
      <>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises
          target={exerciseDetail.target}
          equipment={exerciseDetail.equipment}
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </>
    );
  } catch (error) {
    console.error('Error fetching exercise details:', error);
    return notFound();
  }
}
