import type { Exercise, YoutubeVideo } from '@/types/api';
import { fetchData, exerciseOptions, youtubeOptions } from './fetchData';

// Server-only wrappers around the RapidAPI endpoints.
const EXERCISEDB_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const YOUTUBE_URL = 'https://youtube-search-and-download.p.rapidapi.com/search';
// ExerciseDB has ~1300 exercises; this limit returns all of them in one request.
const LIST_QUERY = '?limit=1400&offset=0';

interface YouTubeSearchResult {
  contents: YoutubeVideo[];
  estimatedResults: string;
  next: string;
}

const fetchExerciseList = (path: string) =>
  fetchData<Exercise[]>(`${EXERCISEDB_URL}${path}${LIST_QUERY}`, exerciseOptions);

export const fetchAllExercises = () => fetchExerciseList('');

export const fetchExercises = (bodyPart: string) =>
  bodyPart === 'all'
    ? fetchAllExercises()
    : fetchExerciseList(`/bodyPart/${encodeURIComponent(bodyPart)}`);

export const fetchExercisesByTarget = (target: string) =>
  fetchExerciseList(`/target/${encodeURIComponent(target)}`);

export const fetchExercisesByEquipment = (equipment: string) =>
  fetchExerciseList(`/equipment/${encodeURIComponent(equipment)}`);

export const fetchExerciseById = (id: string) =>
  fetchData<Exercise>(`${EXERCISEDB_URL}/exercise/${encodeURIComponent(id)}`, exerciseOptions);

export const fetchExerciseVideos = async (exerciseName: string): Promise<YoutubeVideo[]> => {
  const result = await fetchData<YouTubeSearchResult>(
    `${YOUTUBE_URL}?query=${encodeURIComponent(exerciseName)}`,
    youtubeOptions,
  );
  return result?.contents ?? [];
};
