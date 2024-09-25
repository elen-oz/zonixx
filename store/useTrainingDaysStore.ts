import { create } from 'zustand';
import type { Exercise, TrainingDay } from '@/types/api';
import { defaultTrainingDaysExercises as defaultExercises } from '@/data/trainingDaysData';

interface ExerciseStore {
  trainingDay1: Exercise[];
  trainingDay2: Exercise[];
  trainingDay3: Exercise[];
  addExerciseToDay: (day: TrainingDay, exercise: Exercise) => void;
  removeExerciseFromDay: (day: TrainingDay, exerciseId: string) => void;
  loadExercises: () => void;
}

export const useTrainingDaysStore = create<ExerciseStore>((set, _get) => ({
  trainingDay1: [],
  trainingDay2: [],
  trainingDay3: [],

  loadExercises: () => {
    const TrainingDays: TrainingDay[] = ['trainingDay1', 'trainingDay2', 'trainingDay3'];
    const loadedExercises: { [key: string]: Exercise[] } = {};

    TrainingDays.forEach((day) => {
      const storedExercises = localStorage.getItem(`exercises_${day}`);
      if (storedExercises) {
        loadedExercises[day] = JSON.parse(storedExercises);
      } else {
        loadedExercises[day] = defaultExercises[day];
        localStorage.setItem(`exercises_${day}`, JSON.stringify(defaultExercises[day]));
      }
    });

    set(loadedExercises);
  },

  addExerciseToDay: (day, exercise) => {
    set((state) => {
      const dayExercises = state[day];
      const exists = dayExercises.some((ex) => ex.id === exercise.id);
      if (!exists) {
        const updatedExercises = [...dayExercises, exercise];
        localStorage.setItem(`exercises_${day}`, JSON.stringify(updatedExercises));
        return { [day]: updatedExercises };
      }
      return state;
    });
  },

  removeExerciseFromDay: (day, exerciseId) => {
    set((state) => {
      const updatedExercises = state[day].filter((ex) => ex.id !== exerciseId);
      localStorage.setItem(`exercises_${day}`, JSON.stringify(updatedExercises));
      return { [day]: updatedExercises };
    });
  },
}));
