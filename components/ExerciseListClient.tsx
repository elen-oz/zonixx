"use client";

import { useState } from "react";
import { Pagination } from "@nextui-org/react";
import ExerciseCard from "./ExerciseCard";
import type {Exercise} from "@/types/api";

type ExerciseListClientProps = {
  exercises: Exercise[];
};

export default function ExerciseListClient({
  exercises,
}: ExerciseListClientProps) {
  const exercisesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = Math.ceil(exercises.length / exercisesPerPage);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];

  return (
    <>
      <ul className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentExercises.map((exercise: Exercise, index: number) => (
          <li key={index}>
            <ExerciseCard key={index} exercise={exercise} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Pagination
          isCompact
          showControls
          total={numberPages}
          initialPage={1}
          page={currentPage}
          onChange={setCurrentPage}
          radius={'full'}
        />
      </div>
    </>
  );
}
