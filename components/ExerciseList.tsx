// ExerciseListServer.tsx (Server Component)
import { ExerciseData } from '@/app/exercises/page';
import ExerciseListClient from './ExerciseListClient';

type ExerciseListServerProps = {
  initialExercises: ExerciseData[];
};

export default function ExerciseListServer({
  initialExercises,
}: ExerciseListServerProps) {
  return <ExerciseListClient initialExercises={initialExercises} />;
}
