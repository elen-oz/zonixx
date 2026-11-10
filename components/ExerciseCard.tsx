'use client';

import {
  Button,
  Modal,
  useDisclosure,
  Card,
  CardHeader,
  CardFooter,
  Image,
} from '@nextui-org/react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Link from 'next/link';
import type { Exercise } from '@/types/api';
import ModalInfo from './ModalInfo';
import { AddWorkoutButton } from './AddWorkoutButton';

type ExerciseCardProps = {
  exercise: Exercise;
};

// Only the image and title are inside the link. The buttons and the modal sit outside it,
// because React events from the modal portal would otherwise bubble up and trigger navigation.
const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5 hover:shadow-xl hover:transition-all ease-in-out "
    >
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="blur">
        <ModalInfo exercise={exercise} isFavorite={false} />
      </Modal>

      <Link href={`/exercises/${exercise.id}`} className="h-full">
        <CardHeader className="absolute z-10 top-1 pt-10 flex-col items-start">
          <h4 className="text-black font-medium text-2xl capitalize">{exercise.name}</h4>
        </CardHeader>
        {exercise.gifUrl ? (
          <img alt={exercise.name} className="h-full object-cover" src={exercise.gifUrl} />
        ) : (
          <Image
            src="/noimage.png"
            alt="No image available"
            className="w-full h-auto object-contain"
            width={450}
            height={270}
          />
        )}
      </Link>

      <Button
        isIconOnly
        variant="light"
        radius="full"
        size="sm"
        aria-label={`Quick info about ${exercise.name}`}
        onPress={onOpen}
        className="absolute z-20 top-2 right-2"
      >
        <IoIosInformationCircleOutline size={30} />
      </Button>

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className=" uppercase">{exercise.target}</p>
        </div>

        <AddWorkoutButton exercise={exercise}>Add</AddWorkoutButton>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
