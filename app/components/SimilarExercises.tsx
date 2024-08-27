import { Spinner } from '@nextui-org/spinner';
import HorizontalScrollBar from './HorizontalScrollBar';

type SimilarExercisesProps = {
  targetMuscleExercises: any[];
  equipmentExercises: any[];
};

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
}: SimilarExercisesProps) => {
  return (
    <>
      <h1>Similar Exercises:</h1>
      <h2>Exercises that target is the same muscle group:</h2>
      {targetMuscleExercises.length ? (
        <HorizontalScrollBar data={targetMuscleExercises} />
      ) : (
        <Spinner />
      )}
      <h2>Exercises with same equipment:</h2>
      {equipmentExercises.length ? (
        <HorizontalScrollBar data={equipmentExercises} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SimilarExercises;
