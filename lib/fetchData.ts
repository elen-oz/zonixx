import type { ApiOptions } from '@/types/api';

// Server-only: these env vars are not prefixed with NEXT_PUBLIC_, so they never reach the browser.
export const exerciseOptions: ApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY || '',
    'x-rapidapi-host': process.env.EXERCISEDB_HOST || '',
  },
};

export const youtubeOptions: ApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY || '',
    'x-rapidapi-host': process.env.YOUTUBE_HOST || '',
  },
};

const ONE_HOUR = 3600;

export const fetchData = async <T>(url: string, options: ApiOptions): Promise<T | null> => {
  try {
    const response = await fetch(url, { ...options, next: { revalidate: ONE_HOUR } });

    if (!response.ok) {
      console.error(`[Fetch] ${url} failed with status ${response.status}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`[Fetch] ${url} failed:`, error);
    return null;
  }
};
