import { ExerciseData } from '../exercises/page';
import { Chip } from '@nextui-org/react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';

type ExerciseCardProps = {
  exercise: ExerciseData;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Card className='py-4'>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt={exercise.name}
          className='object-cover rounded-xl'
          src={exercise.gifUrl}
          width={270}
        />
      </CardBody>
      <CardFooter className='flex-col justify-between'>
        <h4 className='text-tiny uppercase font-bold pb-2'>{exercise.name}</h4>
        <div className='flex gap-1 justify-center flex-wrap'>
          {exercise.secondaryMuscles.map((item) => (
            <div className='bg-warning-500 text-white rounded-full px-1 sm:px-2 text-[0.5rem] sm:text-[1rem]'>
              {item}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
