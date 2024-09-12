import Detail from '@/components/Detail';
import {ExerciseData} from "@/app/exercises/page";
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import { youtubeOptions, fetchData } from '@/lib/fetchData';

export async function getExercise(id): Promise<ExerciseData> {
    const response = await fetch(`http://localhost:3000/api/exercises/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch exercises');
    }

    const data = await response.json();
    return data || [];
}


export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
    const exerciseDetail = await getExercise(params.slug);

  const exerciseVideos = await fetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
    youtubeOptions
  );

  const targetMuscleExercises = await fetch(
    `http://localhost:3000/api/exercises/target/${exerciseDetail.target}`,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      }
  );

  const equipmentExercises = await fetchData(
    `http://localhost:3000/api/exercises/equipment/${exerciseDetail.equipment}`,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      }
  );

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        target={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </>
  );
}
