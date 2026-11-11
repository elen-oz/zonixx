import { notFound } from 'next/navigation';
import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import {
  fetchExerciseById,
  fetchExercisesByEquipment,
  fetchExercisesByTarget,
  fetchExerciseVideos,
} from '@/lib/api';

const ExerciseDetailPage = async ({ params }: { params: { slug: string } }) => {
  const exerciseDetail = await fetchExerciseById(params.slug);

  if (!exerciseDetail) {
    notFound();
  }

  // The extra sections are optional: if one request fails, show the page without it.
  const [exerciseVideos, targetMuscleExercises, equipmentExercises] = await Promise.all([
    fetchExerciseVideos(exerciseDetail.name),
    fetchExercisesByTarget(exerciseDetail.target),
    fetchExercisesByEquipment(exerciseDetail.equipment),
  ]);

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
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
