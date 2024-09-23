import { create } from 'zustand';
import type {Exercise} from "@/types/api";

interface WorkoutStore {
    workouts: Exercise[];
    addWorkout: (workout: Exercise) => void;
    loadWorkouts: () => void;
}

export const useFavoriteWorkouts = create<WorkoutStore>((set, get) => ({
    workouts: [],

    loadWorkouts: () => {
        const storedWorkouts = localStorage.getItem('workouts');
        if (storedWorkouts) {
            set({ workouts: JSON.parse(storedWorkouts) });
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
}));