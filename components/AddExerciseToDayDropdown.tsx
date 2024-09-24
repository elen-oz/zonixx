"use client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';
import {useExerciseStore} from '@/store/useExerciseStore';

import type {TrainingDay} from '@/types/api'

interface AddExerciseProps {
    day: TrainingDay;
}

export default function AddExerciseToDayDropdown({day}: AddExerciseProps) {
    const {workouts: favoriteExercises} = useFavoriteWorkouts();

    const addExerciseToDay = useExerciseStore((state) => state.addExerciseToDay);

    const handleSelect = (id: string) => {
        const selectedExercise = favoriteExercises.find(ex => ex.id === id);
        if (selectedExercise) {
            addExerciseToDay(day, selectedExercise);
        }
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered" radius="none"
                >
                    Add more
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={favoriteExercises}
                          onAction={(key) => handleSelect(String(key))}
            >
                {(exercise) => (
                    <DropdownItem
                        key={exercise.id}
                        className='capitalize'
                    >
                        {exercise.name} ({exercise.bodyPart})
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}