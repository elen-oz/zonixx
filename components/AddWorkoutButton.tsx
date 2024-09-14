"use client";
import { Button } from "@nextui-org/react";
import { useWorkouts } from "@/hooks/useWorkouts";

interface AddWorkoutButtonProps {
  exercise: string;
}

export const AddWorkoutButton = ({ exercise }: AddWorkoutButtonProps) => {
  const { addWorkout } = useWorkouts();

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
