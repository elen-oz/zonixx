import { notFound } from 'next/navigation';
import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import { exerciseOptions, youtubeOptions, fetchData } from '@/lib/fetchData';
import type { Exercise, YoutubeVideo } from '@/types/api';

const EXERCISEDB_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const YOUTUBE_URL = 'https://youtube-search-and-download.p.rapidapi.com/search';

interface YouTubeSearchResult {
  contents: YoutubeVideo[];
  estimatedResults: string;
  next: string;
}

const ExerciseDetailPage = async ({ params }: { params: { slug: string } }) => {
  const exerciseDetail = await fetchData<Exercise>(
    `${EXERCISEDB_URL}/exercise/${encodeURIComponent(params.slug)}`,
    exerciseOptions,
  );

  if (!exerciseDetail) {
    notFound();
  }

  // The extra sections are optional: if one request fails, show the page without it.
  const [videoResult, targetMuscleExercises, equipmentExercises] = await Promise.all([
    fetchData<YouTubeSearchResult>(
      `${YOUTUBE_URL}?query=${encodeURIComponent(exerciseDetail.name)}`,
      youtubeOptions,
    ),
    fetchData<Exercise[]>(
      `${EXERCISEDB_URL}/target/${encodeURIComponent(exerciseDetail.target)}?limit=2000&offset=0`,
      exerciseOptions,
    ),
    fetchData<Exercise[]>(
      `${EXERCISEDB_URL}/equipment/${encodeURIComponent(exerciseDetail.equipment)}?limit=2000&offset=0`,
      exerciseOptions,
    ),
  ]);

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={videoResult?.contents ?? []} name={exerciseDetail.name} />
      <SimilarExercises
        target={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
        targetMuscleExercises={targetMuscleExercises ?? []}
        equipmentExercises={equipmentExercises ?? []}
      />
    </>
  );
};

export default ExerciseDetailPage;
