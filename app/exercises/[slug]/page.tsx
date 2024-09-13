import { notFound } from "next/navigation";
import Detail from "@/components/Detail";
import ExerciseVideo from "@/components/ExerciseVideo";
import SimilarExercises from "@/components/SimilarExercises";
import { youtubeOptions, fetchData, getExerciseData } from "@/lib/fetchData";

export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const exerciseDetail = await getExerciseData(params.slug);

    const exerciseVideos = await fetchData(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
      youtubeOptions,
    );

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const targetMuscleExercisesResponse = await fetch(
      `${baseUrl}/api/exercises/target/${exerciseDetail.target}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const targetMuscleExercises = await targetMuscleExercisesResponse.json();

    const equipmentExercisesResponse = await fetch(
      `${baseUrl}/api/exercises/equipment/${exerciseDetail.equipment}`,
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
  } catch (error) {
    console.error("Error fetching exercise details:", error);
    notFound();
  }
}
