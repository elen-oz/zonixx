'use client';
import { useState, useEffect } from 'react';
import SearchExercises from '../components/SearchExercises';
// import { fetchData } from '../utils/fetchData';
import { exerciseOptions, fetchData } from '../lib/fetchData';

import ExerciseList from '../components/ExerciseList';

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

export default function Home() {
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  const [bodyPart, setBodyPart] = useState('all');

  const handleExercisesData = (data: ExerciseData[]) => {
    setExercises(data);
  };

  return (
    <>
      <div className='w-full flex flex-col items-center justify-between'>
        <h2 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>
          Exercises
        </h2>
        <SearchExercises
          handleExercisesData={handleExercisesData}
          exercises={exercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
      <ExerciseList
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </>
  );
}
