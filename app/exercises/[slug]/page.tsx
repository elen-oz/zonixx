import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import { exerciseOptions, youtubeOptions, fetchData } from '@/lib/fetchData';

export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

  const exerciseDetail = await fetchData(
    `${exerciseDbUrl}/exercises/exercise/${slug}`,
    exerciseOptions
  );

  const exerciseVideos = await fetchData(
    `${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,
    youtubeOptions
  );

  const targetMuscleExercises = await fetchData(
    `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
    exerciseOptions
  );

  const equipmentExercises = await fetchData(
    `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
    exerciseOptions
  );

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </>
  );
}
