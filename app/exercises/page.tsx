import { Suspense } from 'react';
import { getExercises } from '@/lib/fetchData';

import ExercisesClient from './ExercisesClient';

export type ExerciseData = {
  id: string;
  name: string;
  body_part: string;
  equipment: string;
  gif_url: string;
  target: string;
  secondary_muscles: string[];
  instructions: string[];
};

export default async function ExercisesPage() {
  const allExercises = await getExercises();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExercisesClient allExercises={allExercises} />
    </Suspense>
  );
}
