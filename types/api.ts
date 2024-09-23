// export type ExerciseData = {
//
// };
interface Thumbnail {
    url: string;
    width?: number;
    height?: number;
}

interface Video {
    videoId: string;
    id: string;
    title: string;
    channelName: string;
    thumbnails: Thumbnail[];
}

export interface Exercise {
    id: string;
    name: string;
    // body_part: string;
    bodyPart: string;
    equipment: string;
    // gif_url: string;
    gifUrl: string;
    target: string;
    // secondary_muscles: string[];
    secondaryMuscles: string[];
    instructions: string[];
}

export interface YoutubeVideo {
    video: Video;
}

export interface ApiOptions {
    method: string;
    headers: {
        [key: string]: string;
    };
}