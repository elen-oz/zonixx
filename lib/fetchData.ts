import {ExerciseData} from "@/app/exercises/page";

const cache: { [key: string]: any } = {};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
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

export const getExercises = async () => {
    const response = await fetch('http://localhost:3000/api/exercises', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch exercises');
    }

    const data = await response.json();
    return data || [];
}

export const getExerciseData = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/exercises/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch exercise data');
    }

    const data = await response.json();
    return data || [];
}