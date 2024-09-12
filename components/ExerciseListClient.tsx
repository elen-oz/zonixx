// ExerciseListClient.tsx (Client Component)
'use client';

import { useState } from 'react';
import { Pagination } from '@nextui-org/react';
import ExerciseCard from './ExerciseCard';
import { ExerciseData } from '@/app/exercises/page';

type ExerciseListClientProps = {
    allExercises: ExerciseData[];
};

export default function ExerciseListClient({ allExercises }: ExerciseListClientProps) {
  const exercisesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = Math.ceil(allExercises.length / exercisesPerPage);

    // console.log('++ typeof allExercises:', typeof allExercises);
    // console.log('-- allExercises:', allExercises);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = Array.isArray(allExercises)
        ? allExercises.slice(indexOfFirstExercise, indexOfLastExercise)
        : [];

  return (
    <>
      <ul className='py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentExercises.map((exercise: ExerciseData, index: number) => (
          <li key={index}>
            <ExerciseCard key={index} exercise={exercise} />
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
        <Pagination
          isCompact
          showControls
          total={numberPages}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </>
  );
}
