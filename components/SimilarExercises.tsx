import { Spinner } from '@nextui-org/spinner';
import type { Exercise } from '@/types/api';
import HorizontalScrollBar from './HorizontalScrollBar';

type SimilarExercisesProps = {
  targetMuscleExercises: Exercise[];
  equipmentExercises: Exercise[];
  target: string;
  equipment: string;
};

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
  target,
  equipment,
}: SimilarExercisesProps) => (
  <>
    <div className="mb-10">
      <h2>
        Other exercises that target is <span className="font-semibold capitalize">{target}</span>:
      </h2>
      {targetMuscleExercises.length ? (
        <HorizontalScrollBar data={targetMuscleExercises} />
      ) : (
        <Spinner />
      )}
    </div>
    <div className="mb-10">
      <h2>
        Other exercises with <span className="font-semibold capitalize">{equipment}</span>:
      </h2>
      {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Spinner />}
    </div>
  </>
);

export default SimilarExercises;
