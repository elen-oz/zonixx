"use client";
import {useEffect} from 'react';
import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';
import SmallExerciseCard from './SmallExerciseCard';


const FavoriteWorkoutsList = () => {
    const {workouts, loadWorkouts} = useFavoriteWorkouts();

    useEffect(() => {
        loadWorkouts();
    }, [loadWorkouts]);

    return (
        <ul className="grid grid-cols-4 gap-4">
            {workouts.map((workout) => (
                <li key={workout.id}>
                    <SmallExerciseCard exercise={workout}/>
                </li>
            ))}
        </ul>

    );
};

export default FavoriteWorkoutsList;
