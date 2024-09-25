import type { Exercise } from '@/types/api';
import ExerciseListClient from './ExerciseListClient';

type ExerciseListServerProps = {
  exercises: Exercise[];
};

const ExerciseListServer = ({ exercises }: ExerciseListServerProps) => (
  <ExerciseListClient exercises={exercises} />
);

export default ExerciseListServer;
