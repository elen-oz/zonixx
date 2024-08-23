type ExerciseVideoProps = {
  exerciseVideos: any;
  name: string;
};

const ExerciseVideo = ({ exerciseVideos, name }: ExerciseVideoProps) => {
  // console.log('exerciseVideos', exerciseVideos);

  if (!exerciseVideos.length) return 'Loading...';

  return (
    <div className='px-2  lg:w-[1024px] mx-auto'>
      <h3 className='my-3 text-xl'>
        Watch <span className='font-semibold capitalize'>{name}</span> exercise
        videos:
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-3 md:gap-y-6'>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            className='flex flex-col justify-between gap-1'
          >
            <img
              className=''
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <h5 className='font-semibold'>{item.video.title}</h5>
            <p className='font-thin'>{item.video.channelName}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideo;
