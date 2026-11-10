'use client';

import { useRef, useState } from 'react';
import type { Exercise } from '@/types/api';
import SearchExercises from '@/components/SearchExercises';
import ExerciseListSection from '@/app/exercises/ExerciseListSection';
import { Chip } from '@nextui-org/react';
import { getExercisesByBodyPart, searchExercises } from '@/lib/exercisesClient';
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

const Page = () => {
  // null = nothing requested yet (show the intro), [] = request returned no matches.
  const [exercises, setExercises] = useState<Exercise[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const latestRequest = useRef(0);

  const loadExercises = async (request: () => Promise<Exercise[]>) => {
    latestRequest.current += 1;
    const requestId = latestRequest.current;
    setIsLoading(true);
    setError(null);

    try {
      const data = await request();
      // Ignore a slow response if the user has already asked for something else.
      if (requestId === latestRequest.current) setExercises(data);
    } catch (err) {
      console.error('[Client] Error fetching exercise data:', err);
      if (requestId === latestRequest.current) {
        setError('Failed to fetch exercises. Please try again.');
        setExercises(null);
      }
    } finally {
      if (requestId === latestRequest.current) setIsLoading(false);
    }
  };

  const handleBodyPartChange = (bodyPart: string) =>
    loadExercises(() => getExercisesByBodyPart(bodyPart));

  const handleSearch = (query: string) => loadExercises(() => searchExercises(query));

  const renderResults = () => {
    if (exercises === null) return <StartSection />;
    if (exercises.length === 0) {
      return <p className="text-center py-10">No exercises found. Try another search.</p>;
    }
    return <ExerciseListSection exercises={exercises} />;
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-between">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          Exercises
        </h2>
        <SearchExercises onSearch={handleSearch} />
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

      {renderResults()}
    </>
  );
};

export default Page;
