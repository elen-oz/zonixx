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
    const exercisesData: Exercise[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', exerciseOptions);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ExercisesClient allExercises={exercisesData}/>
        </Suspense>
    );
}
