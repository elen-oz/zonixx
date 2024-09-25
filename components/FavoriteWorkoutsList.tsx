'use client';

import { useEffect } from 'react';
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';
import SmallExerciseCard from './SmallExerciseCard';

const FavoriteWorkoutsList = () => {
  const { workouts, loadWorkouts, removeWorkout } = useFavoriteWorkouts();

  useEffect(() => {
    loadWorkouts();
  }, [loadWorkouts]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {workouts.map((workout) => (
        <li key={workout.id}>
          <SmallExerciseCard exercise={workout} removeWorkout={removeWorkout} />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteWorkoutsList;
