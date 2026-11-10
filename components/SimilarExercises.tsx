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
        Other exercises that target is <span className="font-heading underline">{target}</span>:
      </h2>
      {targetMuscleExercises.length ? (
        <HorizontalScrollBar data={targetMuscleExercises} />
      ) : (
        <p>No similar exercises found.</p>
      )}
    </div>
    <div className="mb-10">
      <h2>
        Other exercises with <span className="font-heading underline">{equipment}</span>:
      </h2>
      {equipmentExercises.length ? (
        <HorizontalScrollBar data={equipmentExercises} />
      ) : (
        <p>No exercises found for this equipment.</p>
      )}
    </div>
  </>
);

export default SimilarExercises;
