'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Detail from '@/app/components/Detail';
import ExerciseVideo from '@/app/components/ExerciseVideo';
import SimilarExercises from '@/app/components/SimilarExercises';
import { ExerciseData } from '../page';
import {
  exerciseOptions,
  youtubeOptions,
  fetchData,
} from '@/app/utils/fetchData';
import { log } from 'console';

const Details = (props: ExerciseData) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${slug}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, []);

  return (
    <>
      {/* <h1 className='w-[100px] h-[100px] bg-yellow-500 text-white'>{slug}</h1> */}
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      {/* <SimilarExercises /> */}
    </>
  );
};

export default Details;
