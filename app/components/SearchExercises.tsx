'use client';
import { useState } from 'react';
// import { exerciseOptions, fetchData } from '../utils/fetchData';
import { fetchData } from '../utils/fetchData';

type SearchExerciseProps = {
  handleExercisesData: (data: any) => void;
};

const SearchExercises = ({ handleExercisesData }: SearchExerciseProps) => {
  const [search, setSearch] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('you are looking for: ', search.toLowerCase());

    if (search) {
      // const exerciseData = await fetchData(
      //   'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
      //   exerciseOptions
      // );

      const exerciseData = await fetchData('/data/data.json');

      const searchedExercises = exerciseData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      handleExercisesData(searchedExercises);

      console.log('FILTER: ', searchedExercises);
      console.log('ALL: ', exerciseData);

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
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0'
    >
      <div className='relative '>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Search exercises...'
          id='search-exercises'
          className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
      </div>
      <button
        className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 duration-200'
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default SearchExercises;
