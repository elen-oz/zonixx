"use client";
import {useEffect} from 'react';
import {useFavoriteWorkouts} from '@/store/useFavoriteWorkouts';


const FavoriteWorkoutsList = () => {
    const {workouts, loadWorkouts} = useFavoriteWorkouts();

    useEffect(() => {
        loadWorkouts();
    }, [loadWorkouts]);

    return (
        <>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>{workout.name}</li>
                ))}
            </ul>
        </>
    );
};

export default FavoriteWorkoutsList;
