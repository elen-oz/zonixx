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

export type BodyPart = "full body" | "core" | "upper body" | "back" | "cardio" | "chest" | "lower arms" | "lower legs" | "legs" | "neck" | "shoulders" | "upper arms" | "upper legs" | "waist";
export type Equipment = "assisted" | "band" | "barbell" | "body weight" | "bosu ball" | "cable" | "dumbbell" | "elliptical machine" | "ez barbell" | "hammer" | "kettlebell" | "leverage machine" | "medicine ball" | "olympic barbell" | "resistance band" | "roller" | "rope" | "skierg machine" | "sled machine" | "smith machine" | "stability ball" | "stationary bike" | "stepmill machine" | "tire" | "trap bar" | "upper body ergometer" | "weighted" | "wheel roller";
export type Target = "abductors" | "abs" | "adductors" | "biceps" | "calves" | "cardiovascular system" | "delts" | "forearms" | "glutes" | "hamstrings" | "lats" | "levator scapulae" | "pectorals" | "quads" | "serratus anterior" | "spine" | "traps" | "triceps" | "upper back";


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

export type Day = 'day1' | 'day2' | 'day3';