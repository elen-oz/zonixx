import type { ApiOptions } from '@/types/api';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY || '',
    'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST_EXDB || '',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY || '',
    'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST_YT || '',
  },
};

const isClient = typeof window !== 'undefined';

const getFromCache = (key: string) => {
  if (!isClient) return null;
  const item = localStorage.getItem(key);
  if (item) {
    const { data, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp < 3600000) {
      // 1 hour
      console.info(`[Cache] Using cached data for: ${key}`);
      return data;
    }
  }
  return null;
};

const setToCache = (key: string, data: any) => {
  if (!isClient) return;
  const item = JSON.stringify({ data, timestamp: Date.now() });
  localStorage.setItem(key, item);
  console.info(`[Cache] Stored data in cache for: ${key}`);
};

export const fetchData = async (url: string, options: ApiOptions) => {
  console.info(`[Fetch] Attempting to fetch data for URL: ${url}`);

  if (isClient) {
    const cachedData = getFromCache(url);
    if (cachedData) {
      console.info(`[Fetch] Returning cached data for: ${url}`);
      return cachedData;
    }
  }

  try {
    console.info(`[Fetch] No cache hit, fetching from API: ${url}`);
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`[Fetch] HTTP error! Status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    console.info(`[Fetch] Received data from API. Data length: ${JSON.stringify(data).length}`);

    if (isClient) {
      setToCache(url, data);
    }

    return data;
  } catch (error) {
    console.error('[Fetch] Fetch data error:', error);
    return null;
  }
};
