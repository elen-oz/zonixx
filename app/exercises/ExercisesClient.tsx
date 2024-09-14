"use client";

import { useState } from "react";
import { ExerciseData } from "./page";
import SearchExercises from "@/components/SearchExercises";
import ExerciseList from "@/components/ExerciseList";
import { Chip } from "@nextui-org/react";

const bodyParts = [
  "all",
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

export default function ExercisesClient({
  allExercises,
}: {
  allExercises: ExerciseData[];
}) {
  const [exercises, setExercises] = useState<ExerciseData[]>(allExercises);

  const fetchExercisesByBodyPart = async (selectedBodyPart: string = "all") => {
    try {
      const url =
        selectedBodyPart === "all"
          ? "http://localhost:3000/api/exercises"
          : `http://localhost:3000/api/exercises/body_part/${selectedBodyPart}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setExercises(data);
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };

  const handleBodyPartChange = async (newBodyPart: string) => {
    return await fetchExercisesByBodyPart(newBodyPart);
  };

  const handleExercisesData = (data: ExerciseData[]) => {
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
          {bodyParts.map((item, index) => (
            <li key={index}>
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
      <ExerciseList exercises={exercises} />
    </>
  );
}
