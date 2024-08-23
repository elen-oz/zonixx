export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
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
