// ExerciseListServer.tsx (Server Component)
import { ExerciseData } from '@/app/exercises/page';
import ExerciseListClient from './ExerciseListClient';

type ExerciseListServerProps = {
  allExercises: ExerciseData[];
};

export default function ExerciseListServer({
                                             allExercises,
}: ExerciseListServerProps) {
  return <ExerciseListClient allExercises={allExercises} />;
}
