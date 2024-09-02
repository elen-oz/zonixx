// 'use client';
// import { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';

import Detail from '@/components/Detail';
import ExerciseVideo from '@/components/ExerciseVideo';
import SimilarExercises from '@/components/SimilarExercises';
import { ExerciseData } from '../page';
import { exerciseOptions, youtubeOptions, fetchData } from '@/lib/fetchData';

// const Details = (props: ExerciseData) => {
export default async function ExerciseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exerciseVideos, setExerciseVideos] = useState([]);
  // const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  // const [equipmentExercises, setEquipmentExercises] = useState([]);
  // const { slug } = useParams<{ slug: string }>();

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  //     const youtubeSearchUrl =
  //       'https://youtube-search-and-download.p.rapidapi.com';

  //     const exerciseDetailData = await fetchData(
  //       `${exerciseDbUrl}/exercises/exercise/${slug}`,
  //       exerciseOptions
  //     );
  //     setExerciseDetail(exerciseDetailData);

  //     const exerciseVideosData = await fetchData(
  //       `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
  //       youtubeOptions
  //     );
  //     setExerciseVideos(exerciseVideosData.contents);

  //     const targetMuscleExercisesData = await fetchData(
  //       `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
  //       exerciseOptions
  //     );
  //     setTargetMuscleExercises(targetMuscleExercisesData);

  //     const equipmentExercisesData = await fetchData(
  //       `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
  //       exerciseOptions
  //     );
  //     setEquipmentExercises(equipmentExercisesData);
  //   };

  //   fetchExercisesData();
  // }, []);

  const slug = params.slug;
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

  const exerciseDetail = await fetchData(
    `${exerciseDbUrl}/exercises/exercise/${slug}`,
    exerciseOptions
  );

  const exerciseVideos = await fetchData(
    `${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,
    youtubeOptions
  );

  const targetMuscleExercises = await fetchData(
    `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
    exerciseOptions
  );

  const equipmentExercises = await fetchData(
    `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
    exerciseOptions
  );

  return (
    <>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </>
  );
}
