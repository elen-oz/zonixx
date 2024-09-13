import Detail from "@/components/Detail";
// import {ExerciseData} from "@/app/exercises/page";
import ExerciseVideo from "@/components/ExerciseVideo";
import SimilarExercises from "@/components/SimilarExercises";
import { youtubeOptions, fetchData, getExerciseData } from "@/lib/fetchData";

export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exerciseDetail = await getExerciseData(params.slug);

  const exerciseVideos = await fetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
    youtubeOptions,
  );

  // const targetMuscleExercisesResponse = await fetch(
  //     `http://localhost:3000/api/exercises/target/${exerciseDetail.target}`,
  //     {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //     }
  // );
  const targetMuscleExercisesResponse = await fetch(
    `/api/exercises/target/${exerciseDetail.target}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const targetMuscleExercises = await targetMuscleExercisesResponse.json();

  // const equipmentExercisesResponse = await fetch(
  //     `http://localhost:3000/api/exercises/equipment/${exerciseDetail.equipment}`,
  //     {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //     }
  // );
  const equipmentExercisesResponse = await fetch(
    `/api/exercises/equipment/${exerciseDetail.equipment}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const equipmentExercises = await equipmentExercisesResponse.json();

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        target={exerciseDetail.target}
        equipment={exerciseDetail.equipment}
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </>
  );
}
