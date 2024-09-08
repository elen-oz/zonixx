'use client';

import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
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

type ExerciseCardProps = {
  exercise: ExerciseData;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // console.log('exercise in ExerciseCard', exercise);

  // todo: проверить рабо ли ги?

  return (
    <Card className='h-full pb-4 justify-between'>
      <CardHeader>
        <IoIosInformationCircleOutline
          onClick={onOpen}
          size={40}
          className='p-2 cursor-pointer'
        />
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  {exercise.name}
                </ModalHeader>
                <ModalBody>
                  {/* <Image
                    alt={exercise.name}
                    className='object-cover rounded-xl'
                    src={exercise.gifUrl}
                    width={370}
                  /> */}
                  <img
                    alt={exercise.name}
                    className='object-cover rounded-xl'
                    src={exercise.gifUrl}
                    width={370}
                  />
                  <div>
                    <span className='inline'>Target: </span>
                    <span className='inline font-bold bg-warning-500 text-white rounded-full px-1 '>
                      {exercise.target}
                    </span>
                  </div>

                  <div className='flex gap-1 justify-center flex-wrap'>
                    {exercise.secondaryMuscles.map((item, index) => (
                      <Chip key={index} className='bg-warning-500 text-white'>
                        {item}
                      </Chip>
                    ))}
                  </div>

                  <h3 className='font-semibold'>Instructions:</h3>
                  <ol className='list-decimal list-inside'>
                    {exercise.instructions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Close
                  </Button>
                  <Button color='primary' onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardHeader>
      <Link href={`/exercises/${exercise.id}`} className='h-full'>
        <CardBody className='overflow-visible py-2'>
          {exercise.gifUrl ? (
            // <Image
            //   alt={exercise.name}
            //   className='object-cover rounded-xl h-full'
            //   src={exercise.gifUrl}
            //   width={270}
            // />
            <img
              alt={exercise.name}
              className='object-cover rounded-xl h-full'
              src={exercise.gifUrl}
              width={270}
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
