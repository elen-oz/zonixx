import { notFound } from "next/navigation";
import Detail from "@/components/Detail";
import ExerciseVideo from "@/components/ExerciseVideo";
import SimilarExercises from "@/components/SimilarExercises";
import { exerciseOptions, youtubeOptions, fetchData, getExerciseData } from "@/lib/fetchData";

export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    // const exerciseDetail = await getExerciseData(params.slug);
      const exerciseDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.slug}`, exerciseOptions);

    if (!exerciseDetail) {
      return notFound();
    }

    // const exerciseVideos =
    //   (await fetchData(
    //     `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
    //     youtubeOptions,
    //   )) || [];
    const exerciseVideos = await fetchData(
            `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
            youtubeOptions,
        );

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const [targetMuscleExercises, equipmentExercises] = await Promise.all([
      fetch(`${baseUrl}/api/exercises/target/${exerciseDetail.target}`)
        .then((res) => res.json())
        .catch(() => []),
      fetch(`${baseUrl}/api/exercises/equipment/${exerciseDetail.equipment}`)
        .then((res) => res.json())
        .catch(() => []),
    ]);

    // console.log('+++ exerciseDetail.gifUrl', exerciseDetail.gifUrl)

    return (
      <>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo
          exerciseVideos={exerciseVideos}
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
    return notFound();
  }
}
