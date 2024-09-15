"use client";

import { useState, useEffect } from "react";

type ExerciseData = {
  id: string;
  name: string;
  body_part: string;
  equipment: string;
  gif_url: string;
  target: string;
  secondary_muscles: string[];
  instructions: string[];
};

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<ExerciseData[]>([]);

  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
  }, []);

  const addWorkout = (workout: ExerciseData) => {
    const filteredWorkouts = workouts.filter(
      (existingWorkout) => existingWorkout.id === workout.id,
    );

    if (filteredWorkouts.length === 0) {
      const newWorkouts = [...workouts, workout];
      setWorkouts(newWorkouts);
      localStorage.setItem("workouts", JSON.stringify(newWorkouts));
      console.log("Workout added");
    } else {
      console.log("Workout already exists");
    }
  };

  return { workouts, addWorkout };
}
