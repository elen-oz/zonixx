'use client';
import { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import SearchExercises from './SearchExercises';
// import { fetchData } from '../utils/fetchData';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Pagination from './Pagination';

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

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const numberPages = Math.ceil(exercises.length / exercisesPerPage);

  return (
    <>
      {/* <SearchExercises handleExercisesData={handleExercisesData} /> */}
      <ul className='p-10 grid grid-cols-4 gap-4'>
        {/* {exercises.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))} */}
        {currentExercises.map((exercise: ExerciseData, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ul>
      <Pagination
        numberPages={numberPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ExerciseList;
