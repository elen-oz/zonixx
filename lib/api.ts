import type { Exercise } from '@/types/api';
import { fetchData, exerciseOptions } from './fetchData';

const EXERCISEDB_URL = 'https://exercisedb.p.rapidapi.com/exercises';

export const fetchAllExercises = () =>
  fetchData<Exercise[]>(`${EXERCISEDB_URL}?limit=1400&offset=0`, exerciseOptions);

export const fetchExercises = (bodyPart: string) => {
  if (bodyPart === 'all') return fetchAllExercises();

  return fetchData<Exercise[]>(
    `${EXERCISEDB_URL}/bodyPart/${encodeURIComponent(bodyPart)}?limit=1400&offset=0`,
    exerciseOptions,
  );
};
