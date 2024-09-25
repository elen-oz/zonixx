'use client';

import { useState } from 'react';
import type { Exercise } from '@/types/api';
import SearchExercises from '@/components/SearchExercises';
import ExerciseList from '@/components/ExerciseList';
import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import HeroImg from '@/app/assets/images/hero5.webp';
import { fetchExercises } from '@/lib/api';
import StartSection from '@/app/exercises/StartSection';

const bodyParts = [
  'all',
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

const ExercisesClient = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExercisesByBodyPart = async (selectedBodyPart: string = 'all') => {
    setIsLoading(true);
    setError(null);
    try {
      console.info(`[Client] Fetching exercises for body part: ${selectedBodyPart}`);
      const data = await fetchExercises(selectedBodyPart);
      if (Array.isArray(data) && data.length > 0) {
        setExercises(data);
        console.info(`[Client] Fetched ${data.length} exercises for ${selectedBodyPart}`);
      } else {
        throw new Error('No exercises found or invalid data received from API');
      }
    } catch (err) {
      console.error('[Client] Error fetching exercise data:', err);
      setError('Failed to fetch exercises. Please try again.');
      setExercises([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBodyPartChange = async (newBodyPart: string) => {
    console.info(`[Client] Body part changed to: > ${newBodyPart} <`);
    await fetchExercisesByBodyPart(newBodyPart);
  };

  const handleExercisesData = (data: Exercise[]) => {
    console.info(`[Client] Search results: ${data.length} exercises`);
    setExercises(data);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-between">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          Exercises
        </h2>
        <SearchExercises handleExercisesData={handleExercisesData} />
        <ul className="py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center">
          {bodyParts.map((item) => (
            <li key={item}>
              <Chip
                onClick={() => handleBodyPartChange(item)}
                className="bg-blue-50 hover:cursor-pointer active:bg-primary active:text-white"
              >
                {item}
              </Chip>
            </li>
          ))}
        </ul>
      </div>

      {isLoading && <p>Loading exercises...</p>}
      {error && <p className="error">{error}</p>}

      {exercises.length > 0 ? <ExerciseList exercises={exercises} /> : <StartSection />}
    </>
  );
};

export default ExercisesClient;
