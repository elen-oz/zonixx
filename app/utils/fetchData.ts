const cache: { [key: string]: any } = {};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url: string, options: any) => {
  if (cache[url]) {
    console.log('Using cached data for:', url);
    return cache[url];
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    cache[url] = data;

    return data;
  } catch (error) {
    console.error('Fetch data error:', error);
    return null;
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

// export const fetchData = async (url: string) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };
