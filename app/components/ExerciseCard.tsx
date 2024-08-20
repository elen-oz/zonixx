import { ExerciseData } from './ExerciseList';

type ExerciseCardProps = {
  exercise: ExerciseData;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <li>
      <h5>{exercise.name}</h5>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
    </li>
  );
};

export default ExerciseCard;
