import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data }: any) => {
  return (
    <div className='flex flex-col bg-white m-auto p-auto'>
      <div className='flex overflow-x-scroll pb-10 hide-scroll-bar'>
        <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '>
          {data.map((item: any) => (
            <div className='inline-block px-3'>
              <div className='w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                <ExerciseCard exercise={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
