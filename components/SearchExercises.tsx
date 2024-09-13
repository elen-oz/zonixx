import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { getExercises } from "@/lib/fetchData";

type SearchExerciseProps = {
  handleExercisesData: (data: any) => void;
};

const SearchExercises = ({ handleExercisesData }: SearchExerciseProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search) {
      const exerciseData = await getExercises();

      const searchedExercises = exerciseData.filter(
        (exercise: any) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      );

      setSearch("");
      handleExercisesData(searchedExercises);
    }
  };

  return (
    <>
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
          <Button
            className="font-semibold shadow w-full bg-red-500 text-white"
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </>
  );
};

export default SearchExercises;
