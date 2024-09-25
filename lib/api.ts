import { fetchData, exerciseOptions } from './fetchData';

export const fetchExercises = async (bodyPart: string) => {
  console.info(`Fetching exercises for body part: ${bodyPart}`);

  try {
    let url;
    if (bodyPart === 'all') {
      url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1400&offset=0';
    } else {
      url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1400&offset=0`;
    }

    const data = await fetchData(url, exerciseOptions);

    console.info(`Received data for ${bodyPart}: ${JSON.stringify(data).slice(0, 100)}...`);

    return data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
};
