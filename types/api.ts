export interface YoutubeVideo {
    video: {
        thumbnails: {
            url: string;
            width?: number;
            height?: number;
        }[];
        id?: string;
        title: string;
        description?: string;
        videoId: string;
        channelName: string;
    };
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

export interface ApiOptions {
    headers: {
        [key: string]: string;
    };
}