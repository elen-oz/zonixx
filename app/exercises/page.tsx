import {fetchData, exerciseOptions} from "@/lib/fetchData";
import ExercisesClient from "./ExercisesClient";

async function getExercises() {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0";
    return await fetchData(url, exerciseOptions);
}

export default async function ExercisesPage() {
    const allExercises = await getExercises();

    return <ExercisesClient allExercises={allExercises}/>;
}

// import {Suspense} from "react";
// import ExercisesClient from "./ExercisesClient";
// // import {getExercises} from "@/lib/getExercises";
// import {fetchData, exerciseOptions} from "@/lib/fetchData";
// import type {Exercise} from "@/types/api";
//
// // export type ExerciseData = {
// // ...
// // };
//
// export default async function ExercisesPage() {
//     // const exercisesData = await getExercises();
//     // const exercisesData: Exercise[] = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', exerciseOptions);
//
//     let exercisesData: Exercise[] = [];
//
//     try {
//         const response = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0', exerciseOptions);
//         if (Array.isArray(response)) {
//             exercisesData = response;
//         } else {
//             console.error('Unexpected response format:', response);
//         }
//     } catch (error) {
//         console.error('Error fetching exercises:', error);
//     }
//
//     if (exercisesData.length === 0) {
//         return <div>No exercises found. Please try again later.</div>;
//     }
//
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <ExercisesClient allExercises={exercisesData}/>
//         </Suspense>
//     );
// }
