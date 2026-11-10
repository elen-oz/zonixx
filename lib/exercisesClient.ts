import type { Exercise } from '@/types/api';

// Browser-side helpers. They call this app's own API routes, which hold the RapidAPI key.
const getJson = async (url: string): Promise<Exercise[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request to ${url} failed with status ${response.status}`);
  return response.json();
};

export const getExercisesByBodyPart = (bodyPart: string) =>
  getJson(`/api/exercises/${encodeURIComponent(bodyPart)}`);

export const searchExercises = (query: string) =>
  getJson(`/api/exercises?q=${encodeURIComponent(query)}`);
