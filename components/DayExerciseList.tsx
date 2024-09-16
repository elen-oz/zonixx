"use client";

import { useExerciseStore, ExerciseData } from '../store/useExerciseStore';
import AddExercise from './AddExercise';

interface DayExerciseListProps {
    day: 'day1' | 'day2' | 'day3';
}

export default function DayExerciseList({ day }: DayExerciseListProps) {
    const exercises = useExerciseStore((state) => state[day]);

    return (
        <div>
            <h3>{day.toUpperCase()}</h3>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>{exercise.name}</li>
                ))}
                <li>
                    <AddExercise day={day} />
                </li>
            </ul>
        </div>
    );
}