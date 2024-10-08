import Image from 'next/image';
import { AddWorkoutButton } from '@/components/AddWorkoutButton';

const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center mb-10">
      <div>
        <img src={gifUrl} alt="exercise gif" className="max-w-[400px]" />
      </div>
      <div className="max-w-[400px]">
        <h1 className="text-xl capitalize">{name}</h1>
        <div className="">
          <div className="grid grid-cols-4 items-center gap-2 my-4">
            <Image src="/icons/target.svg" alt="target icon" width={30} height={30} />
            <h4 className="col-span-3">
              Body part: <span className="font-semibold capitalize">{bodyPart}</span>
            </h4>
          </div>
          <div className="grid grid-cols-4 items-center gap-2 my-4">
            <Image src="/icons/hand2.svg" alt="target icon" width={30} height={30} />
            <h4 className="col-span-3">
              Muscule: <span className="font-semibold capitalize">{target}</span>
            </h4>
          </div>
          <div className="grid grid-cols-4 items-center gap-2 my-4">
            <Image src="/icons/dumbbell.svg" alt="target icon" width={35} height={35} />
            <h4 className="col-span-3">
              Equipment: <span className="font-semibold capitalize">{equipment}</span>
            </h4>
          </div>

          <AddWorkoutButton exercise={exerciseDetail} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
