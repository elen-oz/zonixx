import { create } from 'zustand';
import type {Exercise} from "@/types/api";

interface WorkoutStore {
    workouts: Exercise[];
    addWorkout: (workout: Exercise) => void;
    removeWorkout: (workoutId: number) => void;
    clearAllWorkouts: () => void;
    loadWorkouts: () => void;
}

const initialWorkouts: Exercise[] = [
    // { id: '501', name: "Отжимания", description: "Классическое упражнение для груди и трицепсов" },
    // { id: '502', name: "Приседания", description: "Базовое упражнение для ног" },
    // { id: '503', name: "Планка", description: "Статическое упражнение для мышц кора" }
];

export const useFavoriteWorkouts = create<WorkoutStore>((set, get) => ({
    workouts: [...initialWorkouts],

    // todo: add removing by 1 exercise & clear all favorite exercises

    loadWorkouts: () => {
        const storedWorkouts = localStorage.getItem('workouts');
        if (storedWorkouts) {
            set({ workouts: JSON.parse(storedWorkouts) });
        } else {
            set({ workouts: initialWorkouts });
            localStorage.setItem('workouts', JSON.stringify(initialWorkouts));
        }
    },

    addWorkout: (workout: Exercise) => {
        const { workouts } = get();
        const workoutExists = workouts.some(
            (existingWorkout) => existingWorkout.id === workout.id
        );

        if (!workoutExists) {
            const newWorkouts = [...workouts, workout];
            set({ workouts: newWorkouts });
            localStorage.setItem('workouts', JSON.stringify(newWorkouts));
            console.info('Workout added');
        } else {
            console.info('Workout already exists');
        }
    },

    removeWorkout: (workoutId: number) => {
        const { workouts } = get();
        const newWorkouts = workouts.filter((workout) => workout.id !== workoutId);
        set({ workouts: newWorkouts });
        localStorage.setItem('workouts', JSON.stringify(newWorkouts));
        console.info('Workout removed');
    },

    clearAllWorkouts: () => {
        set({ workouts: [] });
        localStorage.removeItem('workouts');
        console.info('All workouts cleared');
    },
}));