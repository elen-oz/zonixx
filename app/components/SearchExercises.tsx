'use client';
import { useState, useEffect } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

import { exerciseOptions, fetchData } from '../../lib/fetchData';

// import { fetchData } from '../utils/fetchData';
import { ExerciseData } from '../exercises/page';
import BodyPartsList from './BodyPartsList';

type SearchExerciseProps = {
  handleExercisesData: (data: any) => void;
  exercises: ExerciseData[];
  bodyPart: string;
  setBodyPart: any;
};

const SearchExercises = ({
  handleExercisesData,
  exercises,
  bodyPart,
  setBodyPart,
}: SearchExerciseProps) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      // const bodyPartsData = await fetchData('/data/data.json');

      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
        exerciseOptions
      );
      console.log(exerciseData);

      // const exerciseData = await fetchData('/data/data.json');

      const searchedExercises = exerciseData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      handleExercisesData(searchedExercises);

      // await fetch('/api/saveData', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(exerciseData),
      // });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:items-center md:w-full md:space-x-3 md:space-y-0'
      >
        <Input
          isClearable
          type='text'
          label='Search exercises'
          labelPlacement='outside'
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className='md:pt-[calc(theme(fontSize.small)_+_10px)] '>
          <Button
            color='primary'
            className='font-semibold shadow w-full'
            type='submit'
          >
            Search
          </Button>
        </div>
      </form>
      <BodyPartsList
        data={bodyParts}
        bodyParts
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </>
  );
};

export default SearchExercises;
