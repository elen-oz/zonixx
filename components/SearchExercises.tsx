import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { fetchData, exerciseOptions } from '@/lib/fetchData';
import type { Exercise } from '@/types/api';

type SearchExerciseProps = {
  handleExercisesData: (data: Exercise[]) => void;
};

const SearchExercises = ({ handleExercisesData }: SearchExerciseProps) => {
  const [search, setSearch] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search) {
      const exercisesData: Exercise[] = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0',
        exerciseOptions,
      );

      const searchedExercises = exercisesData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      handleExercisesData(searchedExercises);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:items-center md:w-full md:space-x-3 md:space-y-0"
    >
      <Input
        isClearable
        type="text"
        label="Search exercises"
        labelPlacement="outside"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="md:pt-[calc(theme(fontSize.small)_+_10px)] ">
        <Button className="font-semibold " type="submit" variant="ghost" radius="none">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchExercises;
