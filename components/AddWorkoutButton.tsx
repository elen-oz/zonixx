"use client";
import {Button} from "@nextui-org/react";
import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';

interface AddWorkoutButtonProps {
    exercise: any;
    children: string;
    additionStyle: string;
}

export const AddWorkoutButton = ({
                                     exercise,
                                     children = 'Add to my training',
                                     additionStyle = ''
                                 }: AddWorkoutButtonProps) => {
    const {addWorkout} = useFavoriteWorkouts();

    return (
        <Button
            onClick={() => addWorkout(exercise)}
            color="primary"
            className={`px-4 ${additionStyle}`}
        >
            {children}
        </Button>
    );
};
