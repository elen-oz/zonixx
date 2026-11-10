import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Exercise } from '@/types/api';
import { exercises as initialExercises } from '@/data/initialFavoriteExercisesData';
import { createPersistStorage, readLegacyJson } from './storage';

interface WorkoutStore {
  workouts: Exercise[];
  addWorkout: (workout: Exercise) => void;
  removeWorkout: (workoutId: string) => void;
  clearAllWorkouts: () => void;
}

type PersistedWorkouts = Pick<WorkoutStore, 'workouts'>;

export const useFavoriteWorkouts = create<WorkoutStore>()(
  persist(
    (set, get) => ({
      workouts: initialExercises,

      addWorkout: (workout) => {
        const { workouts } = get();
        if (workouts.some((existing) => existing.id === workout.id)) return;
        set({ workouts: [...workouts, workout] });
      },

      removeWorkout: (workoutId) => {
        set({ workouts: get().workouts.filter((workout) => workout.id !== workoutId) });
      },

      clearAllWorkouts: () => set({ workouts: [] }),
    }),
    {
      name: 'zonixx-favorite-workouts',
      storage: createPersistStorage<PersistedWorkouts>(() => {
        const workouts = readLegacyJson<Exercise[]>('favoriteWorkouts');
        return workouts ? { workouts } : null;
      }),
      partialize: (state) => ({ workouts: state.workouts }),
      // Rehydrated on the client in <Providers> so server and first client render match.
      skipHydration: true,
    },
  ),
);
