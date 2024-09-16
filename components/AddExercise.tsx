"use client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';
import {useExerciseStore, ExerciseData} from '@/store/useExerciseStore';

interface AddExerciseProps {
    day: 'day1' | 'day2' | 'day3';
}

export default function AddExercise({day}: AddExerciseProps) {
    const {workouts: favoriteExercises} = useFavoriteWorkouts();

    const addExerciseToDay = useExerciseStore((state) => state.addExerciseToDay);

    const handleSelect = (id: string) => {
        const selectedExercise = favoriteExercises.find(ex => ex.id === id);
        if (selectedExercise) {
            addExerciseToDay(day, selectedExercise);
        }
    };

    return (
        <>

            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        Add exercise
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions" items={favoriteExercises} onAction={(key) => handleSelect(key)}
                >
                    {(exercise) => (
                        <DropdownItem
                            key={exercise.id}
                        >
                            {exercise.name}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown></>

    );
}