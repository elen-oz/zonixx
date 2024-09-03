import { Pagination } from '@nextui-org/react';

import ExerciseCard from './ExerciseCard';
import { ExerciseData } from '@/app/exercises/page';

type ExerciseListProps = {
  initialExercises: ExerciseData[];
};

export default async function ExerciseList({
  initialExercises,
}: ExerciseListProps) {
  const exercisesPerPage = 12;
  const currentPage = 1;
  const numberPages = Math.ceil(initialExercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = initialExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  return (
    <>
      <div className='p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentExercises.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination
          isCompact
          showControls
          total={numberPages}
          initialPage={currentPage}
          // onChange={setCurrentPage}
        />
      </div>
    </>
  );
}
