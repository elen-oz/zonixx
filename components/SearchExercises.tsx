import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/button';

type SearchExerciseProps = {
  onSearch: (query: string) => void;
};

const SearchExercises = ({ onSearch }: SearchExerciseProps) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = search.trim();
    if (query) {
      onSearch(query);
      setSearch('');
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
        value={search}
        onValueChange={setSearch}
        onClear={() => setSearch('')}
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
