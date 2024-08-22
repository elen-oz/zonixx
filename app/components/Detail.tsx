const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <div className='flex w-full'>
      <div>
        <img src={gifUrl} alt='exercise gif' width={600} />
      </div>
      <div>
        <h1 className='font-semibold text-xl capitalize'>{name}</h1>
        <p className='text-[#4F4C4C]'>
          Exercises keep you strong.
          <span className='capitalize'>{name}</span> bup is one of the best
          exercises to target your {target}. It will help you improve your mood
          and gain energy.
        </p>
        <h3>Body part: {bodyPart}</h3>
        <h3>Target: {target}</h3>
        <p>Equipment: {equipment}</p>
      </div>
    </div>
  );
};

export default Detail;
