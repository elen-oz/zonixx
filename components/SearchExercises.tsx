import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

import { exerciseOptions, fetchData } from '@/lib/fetchData';
import { ExerciseData } from '@/app/exercises/page';

type SearchExerciseProps = {
  handleExercisesData: (data: any) => void;
  // exercises: ExerciseData[];
};

const SearchExercises = ({
  handleExercisesData,
}: // exercises,
SearchExerciseProps) => {
  const [search, setSearch] = useState('');

  // console.log('exercises in SearchExercises', exercises);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      handleExercisesData(searchedExercises);
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
    </>
  );
};

export default SearchExercises;
