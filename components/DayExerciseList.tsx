"use client";

import { useExerciseStore } from '../store/useExerciseStore';
import AddExercise from './AddExercise';

interface DayExerciseListProps {
    day: 'day1' | 'day2' | 'day3';
}

export default function DayExerciseList({ day }: DayExerciseListProps) {
    const exercises = useExerciseStore((state) => state[day]);

    return (
        <>
            <h3 className="text-center">{day === 'day1' && 'Day 1'}</h3>
            <h3 className="text-center">{day === 'day2' && 'Day 2'}</h3>
            <h3 className="text-center">{day === 'day3' && 'Day 3'}</h3>

            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>{exercise.name}</li>
                ))}
                <li>
                    <AddExercise day={day}/>
                </li>
            </ul>
        </>
    );
}