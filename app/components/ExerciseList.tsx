'use client';
import { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import SearchExercises from './SearchExercises';

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

const ExerciseList = () => {
  const [exercisesData, setExercisesData] = useState<ExerciseData[]>([]);

  const handleExercisesData = (data: ExerciseData[]) => {
    setExercisesData(data);
  };
  return (
    <>
      <SearchExercises handleExercisesData={handleExercisesData} />
      <ul className='p-10 grid grid-cols-4 gap-4'>
        {exercisesData.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ul>
    </>
  );
};

export default ExerciseList;
