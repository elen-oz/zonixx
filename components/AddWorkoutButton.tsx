"use client";
import {Button} from "@nextui-org/react";
import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';

interface AddWorkoutButtonProps {
    exercise: any;
    children?: string;
    secondary?: boolean;
    preventLinkNavigation?: (e: React.MouseEvent) => void;
}

export const AddWorkoutButton = ({
                                     exercise,
                                     children = 'Add to my training',

                                     secondary = false,
                                     preventLinkNavigation
                                 }: AddWorkoutButtonProps) => {
    const {addWorkout} = useFavoriteWorkouts();
    const secondaryStyles = 'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (preventLinkNavigation) {
            preventLinkNavigation(e);
        }
        addWorkout(exercise);
    };

    return (
        <Button
            onClick={handleClick}
            color={"primary"}
            className={`text-tiny ${secondary && secondaryStyles}`}
            radius="full"
            size="sm"
        >
            {children}
        </Button>
    );
};
