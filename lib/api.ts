import {fetchData, exerciseOptions} from './fetchData'

export const fetchExercises = async (bodyPart: string) => {
    console.log(`Fetching exercises for body part: ${bodyPart}`);
    console.log('API Key:', process.env.NEXT_PUBLIC_API_KEY?.slice(0, 5) + '...');
    console.log('API Host ExDB:', process.env.NEXT_PUBLIC_API_HOST_EXDB);
    console.log('API Host YT:', process.env.NEXT_PUBLIC_API_HOST_YT);

    try {
        let url;
        if (bodyPart === 'all') {
            url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1400&offset=0';
        } else {
            url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1400&offset=0`;
        }

        const data = await fetchData(url, exerciseOptions);

        console.log(`Received data for ${bodyPart}:`, JSON.stringify(data).slice(0, 100) + '...');

        return data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
}