"use client";

import { useExerciseStore } from '../store/useExerciseStore';
import AddExercise from './AddExercise';

interface DayExerciseListProps {
    day: 'day1' | 'day2' | 'day3';
}

export default function DayExerciseList({ day }: DayExerciseListProps) {
    const exercises = useExerciseStore((state) => state[day]);

    return (
        <div className=''>
            <h3 className="text-center">{day === 'day1' ? 'Day 1' : day === 'day2' ? 'Day 2' : 'Day 3'}</h3>

            <ol className='list-decimal px-4'>
                {exercises.map((exercise) => (
                    <li key={exercise.id} className='capitalize'>{exercise.name}</li>
                ))}

            </ol>
            <div className='mx-auto'>
                <AddExercise day={day}/>
            </div>
        </div>
    );
}