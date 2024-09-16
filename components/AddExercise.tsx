import { useFavoriteWorkouts } from '@/store/useFavoriteWorkouts';
import { useExerciseStore, ExerciseData } from '@/store/useExerciseStore';

interface AddExerciseProps {
    day: 'day1' | 'day2' | 'day3';
}

export default function AddExercise({ day }: AddExerciseProps) {
    const { workouts: favoriteExercises } = useFavoriteWorkouts();

    const addExerciseToDay = useExerciseStore((state) => state.addExerciseToDay);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedExercise = favoriteExercises.find(ex => ex.id === event.target.value);
        if (selectedExercise) {
            addExerciseToDay(day, selectedExercise);
        }
    };

    return (
        <div>
            <select onChange={handleSelect} defaultValue="">
                <option value="" disabled>Select exercise</option>
                {favoriteExercises.map((exercise) => (
                    <option key={exercise.id} value={exercise.id}>
                        {exercise.name}
                    </option>
                ))}
            </select>
        </div>
    );
}