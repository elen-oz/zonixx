// store/useFavoriteWorkouts.ts
import { create } from 'zustand';
import { ExerciseData } from './useExerciseStore'; // Импортируем тип данных

interface WorkoutStore {
    workouts: ExerciseData[];
    addWorkout: (workout: ExerciseData) => void;
    loadWorkouts: () => void;
}

export const useFavoriteWorkouts = create<WorkoutStore>((set, get) => ({
    workouts: [],

    // Метод для загрузки тренировок из localStorage при инициализации
    loadWorkouts: () => {
        const storedWorkouts = localStorage.getItem('workouts');
        if (storedWorkouts) {
            set({ workouts: JSON.parse(storedWorkouts) });
        }
    },

    // Метод для добавления новой тренировки
    addWorkout: (workout: ExerciseData) => {
        const { workouts } = get();
        const workoutExists = workouts.some(
            (existingWorkout) => existingWorkout.id === workout.id
        );

        if (!workoutExists) {
            const newWorkouts = [...workouts, workout];
            set({ workouts: newWorkouts });
            localStorage.setItem('workouts', JSON.stringify(newWorkouts));
            console.log('Workout added');
        } else {
            console.log('Workout already exists');
        }
    },
}));