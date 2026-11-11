export interface YoutubeVideo {
  video: {
    id?: string;
    title: string;
    description?: string;
    videoId: string;
    channelName: string;
    thumbnails: {
      url: string;
      width?: number;
      height?: number;
    }[];
  };
}

export interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}

export interface ApiOptions {
  method?: string;
  headers: {
    [key: string]: string;
  };
}

export type TrainingDay = 'trainingDay1' | 'trainingDay2' | 'trainingDay3';
