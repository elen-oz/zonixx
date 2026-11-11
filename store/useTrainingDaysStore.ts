import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Exercise, TrainingDay } from '@/types/api';
import { defaultTrainingDaysExercises as defaultExercises } from '@/data/trainingDaysData';
import { createPersistStorage, readLegacyJson } from './storage';

type TrainingDays = Record<TrainingDay, Exercise[]>;

interface ExerciseStore extends TrainingDays {
  addExerciseToDay: (day: TrainingDay, exercise: Exercise) => void;
  removeExerciseFromDay: (day: TrainingDay, exerciseId: string) => void;
}

const trainingDays: TrainingDay[] = ['trainingDay1', 'trainingDay2', 'trainingDay3'];

const readLegacyTrainingDays = (): TrainingDays | null => {
  const legacy = trainingDays.map((day) => readLegacyJson<Exercise[]>(`exercises_${day}`));
  if (legacy.every((exercises) => exercises === null)) return null;

  return {
    trainingDay1: legacy[0] ?? defaultExercises.trainingDay1,
    trainingDay2: legacy[1] ?? defaultExercises.trainingDay2,
    trainingDay3: legacy[2] ?? defaultExercises.trainingDay3,
  };
};

export const useTrainingDaysStore = create<ExerciseStore>()(
  persist(
    (set) => ({
      ...defaultExercises,

      addExerciseToDay: (day, exercise) => {
        set((state) => {
          if (state[day].some((ex) => ex.id === exercise.id)) return state;
          return { [day]: [...state[day], exercise] };
        });
      },

      removeExerciseFromDay: (day, exerciseId) => {
        set((state) => ({ [day]: state[day].filter((ex) => ex.id !== exerciseId) }));
      },
    }),
    {
      name: 'zonixx-training-days',
      storage: createPersistStorage<TrainingDays>(readLegacyTrainingDays),
      partialize: ({ trainingDay1, trainingDay2, trainingDay3 }) => ({
        trainingDay1,
        trainingDay2,
        trainingDay3,
      }),
      // Rehydrated on the client in <Providers> so server and first client render match.
      skipHydration: true,
    },
  ),
);
