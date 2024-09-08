'use client';

import React from 'react';
import {
  Modal,
  useDisclosure,
  Chip,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import Link from 'next/link';
import { ExerciseData } from '../app/exercises/page';
import ModalInfo from './ModalInfo';

type ExerciseCardProps = {
  exercise: ExerciseData;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // todo: fix gifs display

  return (
    <Card className='h-full pb-4 justify-between'>
      <CardHeader>
        <IoIosInformationCircleOutline
          onClick={onOpen}
          size={40}
          className='p-2 cursor-pointer'
        />

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
          <ModalInfo exercise={exercise} />
        </Modal>
      </CardHeader>
      <Link href={`/exercises/${exercise.id}`} className='h-full'>
        <CardBody className='overflow-visible py-2'>
          {exercise.gifUrl ? (
            <img
              alt={exercise.name}
              className='object-cover rounded-xl h-full'
              src={exercise.gifUrl}
              width={270}
              height={270}
            />
          ) : (
            <div className='h-full'>No image</div>
            // <Image
            //   alt={exercise.name}
            //   className='object-cover rounded-xl'
            //   src='public/icons/noimage.png'
            //   width={270}
            // />
          )}
        </CardBody>
        <CardFooter className='flex-col justify-between'>
          <h4 className='text-tiny uppercase font-bold pb-2'>
            {exercise.name}
          </h4>
          <Chip className='bg-warning-500 text-white'>{exercise.target}</Chip>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ExerciseCard;
