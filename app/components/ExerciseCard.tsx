import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { ExerciseData } from '../exercises/page';
import { Chip } from '@nextui-org/react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';
import Link from 'next/link';

type ExerciseCardProps = {
  exercise: ExerciseData;
};

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className='py-4'>
      <CardHeader>
        {/* <Button onPress={onOpen}>Details</Button> */}
        <IoIosInformationCircleOutline
          onClick={onOpen}
          size={20}
          className='p-2'
        />
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  {exercise.name}
                </ModalHeader>
                <ModalBody>
                  <Image
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
                    {exercise.secondaryMuscles.map((item) => (
                      <div className='bg-warning-500 text-white rounded-full px-1 sm:px-2 text-[0.5rem] sm:text-[1rem]'>
                        {item}
                      </div>
                    ))}
                  </div>

                  <h3 className='font-semibold'>Instructions:</h3>
                  <ol className='list-decimal list-inside'>
                    {exercise.instructions.map((item) => (
                      <li key={item}>{item}</li>
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
      <Link href={`/exercises/${exercise.id}`}>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt={exercise.name}
            className='object-cover rounded-xl'
            src={exercise.gifUrl}
            width={270}
          />
        </CardBody>
        <CardFooter className='flex-col justify-between'>
          <h4 className='text-tiny uppercase font-bold pb-2'>
            {exercise.name}
          </h4>

          <div className='bg-warning-500 text-white rounded-full px-1 sm:px-2 text-[0.5rem] sm:text-[1rem]'>
            {exercise.target}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ExerciseCard;
