import { ScrollShadow } from '@nextui-org/react';
import type { Exercise } from '@/types/api';
import ExerciseCard from './ExerciseCard';

type HorizontalScrollBarProps = {
  data: Exercise[];
};

const HorizontalScrollBar = ({ data }: HorizontalScrollBarProps) => (
  <div className="flex flex-col bg-white m-auto p-auto">
    <ScrollShadow
      hideScrollBar
      orientation="horizontal"
      size={50}
      className="flex overflow-x-scroll py-4 "
    >
      <div className="relative">
        <ul className="flex flex-nowrap">
          {data.map((item) => (
            <li key={item.id} className="block">
              <div className="w-64 max-w-xs overflow-hidden rounded-lg bg-white duration-300 ease-in-out px-3 py-7">
                <ExerciseCard exercise={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollShadow>
  </div>
);

export default HorizontalScrollBar;
