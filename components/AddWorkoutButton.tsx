"use client";
import { Button } from "@nextui-org/react";
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';

interface AddWorkoutButtonProps {
  exercise: any;
}

export const AddWorkoutButton = ({ exercise }: AddWorkoutButtonProps) => {
  const { addWorkout } = useFavoriteWorkouts();

  return (
    <Button
      onClick={() => addWorkout(exercise)}
      color="primary"
      className="px-4"
    >
      Add to my training
    </Button>
  );
};
