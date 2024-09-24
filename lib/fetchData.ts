import type {ApiOptions} from '@/types/api'

interface CacheItem {
    data: any;
    timestamp: number;
}

class CombinedCache {
    private memoryCache: { [key: string]: CacheItem } = {};
    private readonly maxAge: number;

    //  number = 3600
    constructor(maxAgeInSeconds: number = 14400) {
        this.maxAge = maxAgeInSeconds * 1000;
    }

    set(key: string, data: any): void {
        const item: CacheItem = {data, timestamp: Date.now()};
        this.memoryCache[key] = item;
        localStorage.setItem(key, JSON.stringify(item));
    }

    get(key: string): any | null {
        // Check memory cache
        const memItem = this.memoryCache[key];
        if (memItem && this.isValid(memItem)) {
            return memItem.data;
        }

        // Check localStorage
        const storedItem = localStorage.getItem(key);
        if (storedItem) {
            const parsedItem: CacheItem = JSON.parse(storedItem);
            if (this.isValid(parsedItem)) {
                this.memoryCache[key] = parsedItem;
                return parsedItem.data;
            } else {
                localStorage.removeItem(key);
            }
        }

        return null;
    }

    private isValid(item: CacheItem): boolean {
        return Date.now() - item.timestamp < this.maxAge;
    }
}

const cache = new CombinedCache(14400); // 4 h

// const cache: { [key: string]: any } = {};

export const exerciseOptions = {
    method: 'GET',
    headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY || '',
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY || '',
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
    },
};

export const fetchData = async (url: string, options: ApiOptions) => {
    console.info("Fetching data for URL:", url);
    console.info("Options:", options);

    let localStorageAvailable = false;
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        localStorageAvailable = true;
    } catch (e) {
        console.warn("!- localStorage is not available:", e);
    }

    if (localStorageAvailable) {
        const cachedData = cache.get(url);
        if (cachedData) {
            console.info("Using cached data for:", url);
            return cachedData;
        }
    }

    try {
        console.info("-- Fetching from API");
        const response = await fetch(url, options);

        console.info("+ Response status:", response.status);
        console.info("+ Response headers:", response.headers);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.info("-- Received data.length:", data.length);

        if (localStorageAvailable) {
            cache.set(url, data);
            console.info("Data cached successfully");
        }

        return data;
    } catch (error) {
        console.error("Fetch data error:", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
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
