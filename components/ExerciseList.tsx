// 'use client';
// import { useState, useEffect } from 'react';
import { Pagination } from '@nextui-org/react';

import ExerciseCard from './ExerciseCard';
import SearchExercises from './SearchExercises';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import { ExerciseData } from '@/app/exercises/page';

type ExerciseListProps = {
  initialExercises: ExerciseData[];
  // currentPage?: number;
  // bodyPart: string;

  // setBodyPart: any;
  // setExercises: any;
};

export default async function ExerciseList({
  initialExercises,
}: // currentPage = 1,
// setExercises,
// bodyPart = 'all',
// setBodyPart,
ExerciseListProps) {
  // const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
  const currentPage = 1;
  const numberPages = Math.ceil(initialExercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = initialExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  // zdes
  // useEffect(() => {
  //   const fetchingExerciseData = async () => {
  //     let exerciseData = [];

  //     if (bodyPart === 'all') {
  //       exerciseData = await fetchData(
  //         'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
  //         exerciseOptions
  //       );
  //     } else {
  //       exerciseData = await fetchData(
  //         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
  //         exerciseOptions
  //       );
  //     }

  //     setExercises(exerciseData);
  //   };

  //   fetchingExerciseData();
  // }, [bodyPart]);

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
