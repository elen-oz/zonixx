'use client';

import { useState } from 'react';
import { Pagination } from '@nextui-org/react';
import type { Exercise } from '@/types/api';
import ExerciseCard from '../../components/ExerciseCard';

type ExerciseListSectionProps = {
  exercises: Exercise[];
};

const ExerciseListSection = ({ exercises }: ExerciseListSectionProps) => {
  const exercisesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = Math.ceil(exercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  return (
    <section className="w-full py-6 text-center mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <ul className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentExercises.map((exercise: Exercise) => (
          <li key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          total={numberPages}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
          radius="full"
        />
      </div>
    </section>
  );
};

export default ExerciseListSection;
