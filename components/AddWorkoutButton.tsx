'use client';

import { Button } from '@nextui-org/react';
import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';
import type { Exercise } from '@/types/api';

interface AddWorkoutButtonProps {
  exercise: Exercise;
  children?: string;
  secondary?: boolean;
}

export const AddWorkoutButton: React.FC<AddWorkoutButtonProps> = ({
  exercise,
  children = 'Add to my training',
  secondary = false,
}: AddWorkoutButtonProps) => {
  const { addWorkout } = useFavoriteWorkouts();
  const secondaryStyles =
    'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white';

  return (
    <Button
      onPress={() => addWorkout(exercise)}
      color="primary"
      className={`text-tiny ${secondary ? secondaryStyles : ''}`}
      radius="full"
      size="sm"
    >
      {children}
    </Button>
  );
};
