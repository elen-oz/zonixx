import {fetchData, exerciseOptions} from "@/lib/fetchData";
import ExercisesClient from "./ExercisesClient";

async function getExercises() {
    console.info("[Server] Fetching initial exercises data");
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0";
    return await fetchData(url, exerciseOptions);
}

export default async function ExercisesPage() {
    const allExercises = await getExercises();
    console.info(`[Server] Fetched ${allExercises?.length || 0} exercises`);
    return <ExercisesClient allExercises={allExercises}/>;
}
