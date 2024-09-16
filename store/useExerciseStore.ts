import { create } from 'zustand';

export type ExerciseData = {
    id: string;
    name: string;
    body_part: string;
    equipment: string;
    gif_url: string;
    target: string;
    secondary_muscles: string[];
    instructions: string[];
};

interface ExerciseStore {
    day1: ExerciseData[];
    day2: ExerciseData[];
    day3: ExerciseData[];
    addExerciseToDay: (day: 'day1' | 'day2' | 'day3', exercise: ExerciseData) => void;
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
                return { [day]: [...dayExercises, exercise] };
            }
            return state;
        });
    },
}));