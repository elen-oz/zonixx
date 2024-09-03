// File: app/exercises/ExercisesClient.tsx (Client Component)
'use client';

import { useState, useCallback } from 'react';
import { ExerciseData } from './page';
import SearchExercises from '@/components/SearchExercises';
import ExerciseList from '@/components/ExerciseList';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import { Chip } from '@nextui-org/react';

const bodyParts = [
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist',
];

export default function ExercisesClient({
  initialExercises,
}: {
  initialExercises: ExerciseData[];
}) {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState<ExerciseData[]>(initialExercises);

  const fetchExercisesByBodyPart = useCallback(
    async (selectedBodyPart: string) => {
      try {
        const url =
          selectedBodyPart === 'all'
            ? 'https://exercisedb.p.rapidapi.com/exercises?limit=1400'
            : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`;

        const data = await fetchData(url, exerciseOptions);
        if (data) {
          setExercises(data);
        }
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    },
    []
  );

  const handleBodyPartChange = (newBodyPart: string) => {
    setBodyPart(newBodyPart);
    fetchExercisesByBodyPart(newBodyPart);
  };

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
        />
        <ul className='py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center'>
          {bodyParts.map((item, index) => (
            <li key={index}>
              <Chip
                onClick={() => handleBodyPartChange(item)}
                className='bg-blue-50 hover:cursor-pointer active:bg-primary active:text-white'
              >
                {item}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
      <ExerciseList initialExercises={exercises} />
    </>
  );
}
