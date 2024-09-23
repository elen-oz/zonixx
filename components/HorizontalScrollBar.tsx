import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import {ScrollShadow} from "@nextui-org/react";
import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data }: any) => {
  return (
      <div className='flex flex-col bg-white m-auto p-auto'>
          {/*<div className='flex overflow-x-scroll py-4 hide-scroll-bar'>*/}
          <ScrollShadow hideScrollBar orientation="horizontal" size={50} className='flex overflow-x-scroll py-4 '>

              <div className='relative'>
                  {data.length > 4 && (
                      <>
                          <IoIosArrowDroprightCircle
                              size={30}
                              className='sticky z-50 top-[50%] left-[95%]'
                          />
                          <IoIosArrowDropleftCircle
                              size={30}
                              className='sticky z-50 top-[50%] left-5'
                          />
                      </>
                  )}

                  <ul className='flex flex-nowrap'>
                      {data.map((item: any) => (
                          <li key={item.id} className='block'>
                              <div
                                  className='w-64 max-w-xs overflow-hidden rounded-lg bg-white duration-300 ease-in-out px-3 py-7'>
                                  <ExerciseCard exercise={item}/>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          </ScrollShadow>
      </div>
  );
};

export default HorizontalScrollBar;
