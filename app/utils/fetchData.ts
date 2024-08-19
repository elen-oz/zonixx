// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
//     'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST,
//   },
// };

// export const fetchData = async (url: string, options: any) => {
//   const response = await fetch(url, options);
//   const data = await response.json();

//   return data;
// };

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
