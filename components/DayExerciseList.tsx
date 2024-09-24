"use client";

import { useExerciseStore } from '@/store/useExerciseStore';
import AddExerciseToDayDropdown from "./AddExerciseToDayDropdown";
import type {TrainingDay} from "@/types/api"

interface DayExerciseListProps {
    day: TrainingDay;
}

export default function DayExerciseList({ day }: DayExerciseListProps) {
    const exercises = useExerciseStore((state) => state[day]);

    return (
        <div className=''>
            <h3 className="text-center">{day === 'trainingDay1' ? 'Day 1' : day === 'trainingDay2' ? 'Day 2' : 'Day 3'}</h3>

            <ol className='list-decimal px-4 mb-4'>
                {exercises.map((exercise) => (
                    <li key={exercise.id} className='capitalize'>{exercise.name}</li>
                ))}

            </ol>
            <div className='mx-auto'>
                <AddExerciseToDayDropdown day={day}/>
            </div>
        </div>
    );
}