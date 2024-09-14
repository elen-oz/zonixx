"use client";

import { useState, useEffect } from "react";

type Workout = string;

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const storedWorkouts = localStorage.getItem("workouts");
    if (storedWorkouts) {
      setWorkouts(JSON.parse(storedWorkouts));
    }
  }, []);

  const addWorkout = (workout: Workout) => {
    const newWorkouts = [...workouts, workout];
    setWorkouts(newWorkouts);
    localStorage.setItem("workouts", JSON.stringify(newWorkouts));
    console.log("workout added");
  };

  return { workouts, addWorkout };
}
