'use client';
import { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import SearchExercises from './SearchExercises';
// import { fetchData } from '../utils/fetchData';
import { exerciseOptions, fetchData } from '../utils/fetchData';

export type ExerciseData = {
  bodyParts: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

type ExerciseListProps = {
  exercises: ExerciseData[];
  bodyParts: string;
  setBodyParts: any;
};

const ExerciseList = ({
  exercises,
  bodyParts,
  setBodyParts,
}: ExerciseListProps) => {
  // const [exercises, setExercisesData] = useState<ExerciseData[]>([]);

  // const handleExercisesData = (data: ExerciseData[]) => {
  //   setExercisesData(data);
  // };

  return (
    <>
      {/* <SearchExercises handleExercisesData={handleExercisesData} /> */}
      <ul className='p-10 grid grid-cols-4 gap-4'>
        {exercises.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ul>
    </>
  );
};

export default ExerciseList;
