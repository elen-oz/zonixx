// File: app/exercises/page.tsx (Server Component)
import { Suspense } from 'react';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import ExercisesClient from './ExercisesClient';

export type ExerciseData = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

async function getExercises(): Promise<ExerciseData[]> {
  const data = await fetchData(
    'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
    exerciseOptions
  );
  return data || [];
}

export default async function ExercisesPage() {
  const initialExercises = await getExercises();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExercisesClient initialExercises={initialExercises} />
    </Suspense>
  );
}
