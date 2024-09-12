import { Suspense } from 'react';
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

export async function getExercises(): Promise<ExerciseData[]> {
  const response = await fetch('http://localhost:3000/api/exercises', {
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

export default async function ExercisesPage() {
  const allExercises = await getExercises();

  console.log('allExercises: ', allExercises !== undefined);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExercisesClient allExercises={allExercises} />
    </Suspense>
  );
}
