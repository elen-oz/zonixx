import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data }: any) => {
  return (
    <div className='flex flex-col bg-white m-auto p-auto'>
      <div className='flex overflow-x-scroll py-4 hide-scroll-bar'>
        <div className='relative'>
          {data.length > 4 && (
            <>
              <IoIosArrowDroprightCircle
                size={30}
                className='sticky z-50 top-[50%] left-[95%]'
              />
              <IoIosArrowDropleftCircle
                size={30}
                className='sticky z-50 top-[50%] left-3'
              />
            </>
          )}

          <ul className='flex flex-nowrap ml-10 '>
            {data.map((item: any) => (
              <li key={item.id} className='block px-3'>
                <div className='w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                  <ExerciseCard exercise={item} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
