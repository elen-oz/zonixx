import {Spinner} from "@nextui-org/spinner";
import Image from "next/image";
import type {YoutubeVideo} from '@/types/api'

type ExerciseVideoProps = {
    exerciseVideos: YoutubeVideo[];
    name: string;
};

const ExerciseVideo = ({exerciseVideos, name}: ExerciseVideoProps) => {

    if (!exerciseVideos.length) return <Spinner/>;

    return (
        <div className="mb-10">
            <h2>
                Watch <span className="font-semibold capitalize">{name}</span> exercise
                videos:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-3 md:gap-y-6">
                {exerciseVideos?.slice(0, 6).map((item: any, index: any) => (
                    <a
                        key={index}
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col justify-between gap-1"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>

                        <h5 className="font-semibold">{item.video.title}</h5>
                        <p className="font-thin">{item.video.channelName}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ExerciseVideo;
