'use client';
import { useState, useEffect } from 'react';
import { Pagination } from '@nextui-org/react';

import ExerciseCard from './ExerciseCard';
import SearchExercises from './SearchExercises';
// import { fetchData } from '../utils/fetchData';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { ExerciseData } from '../exercises/page';

type ExerciseListProps = {
  exercises: ExerciseData[];
  setBodyPart: any;
  bodyPart: string;
  setExercises: any;
};

const ExerciseList = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}: ExerciseListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const numberPages = Math.ceil(exercises.length / exercisesPerPage);

  useEffect(() => {
    const fetchingExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === 'all') {
        exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchingExerciseData();
  }, [bodyPart]);

  return (
    <>
      <ul className='p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {currentExercises.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ul>
      <Pagination
        isCompact
        showControls
        total={numberPages}
        initialPage={currentPage}
        onChange={setCurrentPage}
      />
    </>
  );
};

export default ExerciseList;
