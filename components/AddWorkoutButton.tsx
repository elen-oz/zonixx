"use client";
import {Button} from "@nextui-org/react";
import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';

interface AddWorkoutButtonProps {
    exercise: any;
    children?: string;
    // additionStyle?: string;
    secondary?: boolean;
}

export const AddWorkoutButton = ({
                                     exercise,
                                     children = 'Add to my training',
                                     
                                     secondary = false
                                 }: AddWorkoutButtonProps) => {
    const {addWorkout} = useFavoriteWorkouts();

    const secondaryStyles = 'border-2 border-primary bg-white text-primary text-sm hover:bg-primary hover:text-white';

    return (
        <Button
            onClick={() => addWorkout(exercise)}
            color="primary"
            className={`px-4 ${secondary && secondaryStyles}`}
            radius="none"
        >
            {children}
        </Button>
    );
};
