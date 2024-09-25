import { create } from 'zustand';
import type { Exercise } from '@/types/api';
import { exercises as initialExercises } from '@/data/exercisesData';

interface WorkoutStore {
  workouts: Exercise[];
  addWorkout: (workout: Exercise) => void;
  removeWorkout: (workoutId: string) => void;
  clearAllWorkouts: () => void;
  loadWorkouts: () => void;
}

export const useFavoriteWorkouts = create<WorkoutStore>((set, get) => ({
  workouts: [...initialExercises],

  loadWorkouts: () => {
    const storedWorkouts = localStorage.getItem('favoriteWorkouts');
    if (storedWorkouts) {
      set({ workouts: JSON.parse(storedWorkouts) });
    } else {
      set({ workouts: initialExercises });
      localStorage.setItem('favoriteWorkouts', JSON.stringify(initialExercises));
    }
  },

  addWorkout: (workout: Exercise) => {
    const { workouts } = get();
    const workoutExists = workouts.some((existingWorkout) => existingWorkout.id === workout.id);

    if (!workoutExists) {
      const newWorkouts = [...workouts, workout];
      set({ workouts: newWorkouts });
      localStorage.setItem('favoriteWorkouts', JSON.stringify(newWorkouts));
      console.info('Workout added');
    } else {
      console.info('Workout already exists');
    }
  },

  removeWorkout: (workoutId: string) => {
    const { workouts } = get();
    const newWorkouts = workouts.filter((workout) => workout.id !== workoutId);
    set({ workouts: newWorkouts });
    localStorage.setItem('favoriteWorkouts', JSON.stringify(newWorkouts));
    console.info('Workout removed');
  },

  clearAllWorkouts: () => {
    set({ workouts: [] });
    localStorage.removeItem('favoriteWorkouts');
    console.info('All workouts cleared');
  },
}));
