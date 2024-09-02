'use client';
import { useState, useEffect } from 'react';
import SearchExercises from '@/components/SearchExercises';
import ExerciseList from '@/components/ExerciseList';
import { exerciseOptions, fetchData } from '@/lib/fetchData';
import BodyPartsList from '@/components/BodyPartsList';
import { Chip } from '@nextui-org/react';

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

export default function ExercisesPage() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  // let bodyPart = 'all';
  // let exercises: ExerciseData[] = [];

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

  useEffect(() => {
    const fetchingExerciseData = async () => {
      let exerciseData: ExerciseData[] = [];

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

  const handleExercisesData = (data: ExerciseData[]) => {
    setExercises(data);
  };

  // if (bodyPart === 'all') {
  //   exercises = await fetchData(
  //     'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
  //     exerciseOptions
  //   );
  // } else {
  //   exercises = await fetchData(
  //     `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
  //     exerciseOptions
  //   );
  // }
  // const bodyPartsData = await fetchData(
  //   'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  //   exerciseOptions
  // );

  // const bodyParts = ['all', ...bodyPartsData];

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
        />
        {/* --- BodyPartsList --- */}
        <ul className='py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center'>
          {bodyParts.map((item, index) => (
            <li key={index}>
              <Chip
                onClick={() => setBodyPart(item)}
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
