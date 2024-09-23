const cache: { [key: string]: any } = {};

export const exerciseOptions = {
    method: 'GET',
    headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchData = async (url: string, options: any) => {
    if (cache[url]) {
        console.info("Using cached data for:", url);
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
        console.error("Fetch data error:", error);
        return null;
    }
};

// export const getExerciseData = async (id: string) => {
//     const baseUrl = process.env.VERCEL_URL
//         ? `https://${process.env.VERCEL_URL}`
//         : "http://localhost:3000";
//
//     const response = await fetch(`${baseUrl}/api/exercises/${id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//
//     if (!response.ok) {
//         throw new Error("Failed to fetch exercise data");
//     }
//
//     const data = await response.json();
//     return data || [];
// };
