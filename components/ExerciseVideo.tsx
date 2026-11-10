import type { YoutubeVideo } from '@/types/api';

type ExerciseVideoProps = {
  exerciseVideos: YoutubeVideo[];
  name: string;
};

const ExerciseVideo = ({ exerciseVideos, name }: ExerciseVideoProps) => {
  // The search result also contains channels and playlists; keep only real videos.
  const videos = exerciseVideos.filter((item) => item.video?.videoId).slice(0, 6);

  return (
    <div className="mb-10">
      <h2>
        Watch <span className="font-heading underline">{name}</span> exercise videos:
      </h2>
      {videos.length === 0 ? (
        <p>No videos found for this exercise.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-3 md:gap-y-6">
          {videos.map(({ video }) => (
            <a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between gap-1"
            >
              <img src={video.thumbnails[0]?.url} alt={video.title} />

              <h5 className="font-semibold">{video.title}</h5>
              <p className="font-thin">{video.channelName}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseVideo;
