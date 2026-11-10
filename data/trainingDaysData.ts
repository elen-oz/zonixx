import type { Exercise, TrainingDay } from '@/types/api';
import { exercises } from './initialFavoriteExercisesData';

const defaultTrainingDayIds: Record<TrainingDay, string[]> = {
  trainingDay1: ['5000', '5005', '5008', '5014'], // Burpee, Mountain Climber, Wall Ball, Dip
  trainingDay2: ['5006', '5002', '5013', '5016'], // Kettlebell Swing, Air Squat, Pull-up, Toes-to-Bar
  trainingDay3: ['5000', '5007', '5010', '5018'], // Burpee, Box Jump, Thruster, Russian Twist
};

const byId = (id: string): Exercise => {
  const exercise = exercises.find((item) => item.id === id);
  if (!exercise) throw new Error(`Default training day references unknown exercise id ${id}`);
  return exercise;
};

export const defaultTrainingDaysExercises: Record<TrainingDay, Exercise[]> = {
  trainingDay1: defaultTrainingDayIds.trainingDay1.map(byId),
  trainingDay2: defaultTrainingDayIds.trainingDay2.map(byId),
  trainingDay3: defaultTrainingDayIds.trainingDay3.map(byId),
};
