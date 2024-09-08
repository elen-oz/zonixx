import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data }: any) => {
  return (
    <div className='flex flex-col bg-white m-auto p-auto'>
      <div className='flex overflow-x-scroll py-4 hide-scroll-bar'>
        <ul className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '>
          {data.map((item: any) => (
            <li key={item.id} className='inline-block px-3'>
              <span className='w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                <ExerciseCard exercise={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
