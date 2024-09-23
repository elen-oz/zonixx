import {Suspense} from "react";
import ExercisesClient from "./ExercisesClient";
// import {getExercises} from "@/lib/getExercises";
import {fetchData, exerciseOptions} from "@/lib/fetchData";
import type {Exercise} from "@/types/api";

// export type ExerciseData = {
//     id: string;
//     name: string;
//     // body_part: string;
//     bodyPart: string;
//     equipment: string;
//     // gif_url: string;
//     gifUrl: string;
//     target: string;
//     // secondary_muscles: string[];
//     secondaryMuscles: string[];
//     instructions: string[];
// };

export default async function ExercisesPage() {
    // const exercisesData = await getExercises();
    // const exercisesData: Exercise[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', exerciseOptions);

    let exercisesData: Exercise[] = [];

    try {
        const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', exerciseOptions);
        if (Array.isArray(response)) {
            exercisesData = response;
        } else {
            console.error('Unexpected response format:', response);
        }
    } catch (error) {
        console.error('Error fetching exercises:', error);
    }

    if (exercisesData.length === 0) {
        return <div>No exercises found. Please try again later.</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ExercisesClient allExercises={exercisesData}/>
        </Suspense>
    );
}
