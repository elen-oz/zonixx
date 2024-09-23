import {create} from 'zustand';
import type {Exercise} from "@/types/api";

interface ExerciseStore {
    day1: Exercise[];
    day2: Exercise[];
    day3: Exercise[];
    addExerciseToDay: (day: 'day1' | 'day2' | 'day3', exercise: Exercise) => void;
}

export const useExerciseStore = create<ExerciseStore>((set, get) => ({
    day1: [],
    day2: [],
    day3: [],
    addExerciseToDay: (day, exercise) => {
        set((state) => {
            const dayExercises = state[day];
            const exists = dayExercises.some((ex) => ex.id === exercise.id);
            if (!exists) {
                return {[day]: [...dayExercises, exercise]};
            }
            return state;
        });
    },
}));