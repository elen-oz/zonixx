const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center'>
      <div>
        <img src={gifUrl} alt='exercise gif' className='max-w-[400px]' />
      </div>
      <div className='max-w-[400px]'>
        <h1 className='font-semibold text-xl capitalize'>{name}</h1>
        <div className='w-[200px]'>
          <div className='grid grid-cols-3 items-center gap-2 my-4'>
            <img src='/icons/target.svg' alt='target icon' width={30} />
            <h3 className='col-span-2'>Body part: {bodyPart}</h3>
          </div>
          <div className='grid grid-cols-3 items-center gap-2 my-4'>
            <img src='/icons/hand2.svg' alt='target icon' width={30} />
            <h3 className='col-span-2'>Muscule: {target}</h3>
          </div>
          <div className='grid grid-cols-3 items-center gap-2 my-4'>
            <img src='/icons/dumbbell.svg' alt='target icon' width={40} />
            <p className='col-span-2'>Equipment: {equipment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
