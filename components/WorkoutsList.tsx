"use client";
import { useEffect } from 'react';
// import { useFavoriteWorkouts } from "@/hooks/useFavoriteWorkouts";
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';


const WorkoutsList = () => {
  const { workouts, addWorkout, loadWorkouts  } = useFavoriteWorkouts();
    // const { workouts: favoriteExercises,loadWorkouts } = useFavoriteWorkouts(); // Получаем любимые упражнения из хука


    useEffect(() => {
        loadWorkouts(); // Загружаем тренировки из localStorage при монтировании компонента
    }, [loadWorkouts]);

  return (
    <div>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutsList;
