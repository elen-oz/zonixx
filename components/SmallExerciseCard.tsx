'use client';

import { Button, Modal, useDisclosure, Chip, Card, CardHeader, CardBody } from '@nextui-org/react';
import { IoIosInformation } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

import type { Exercise } from '@/types/api';
import ModalInfo from './ModalInfo';

type ExerciseCardProps = {
  exercise: Exercise;
  removeWorkout: (id: string) => void;
};

const SmallExerciseCard = ({ exercise, removeWorkout }: ExerciseCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="h-full pb-4 justify-between hover:shadow-xl hover:transition-all ease-in-out hover:border-1">
      <div className="h-full">
        <CardHeader className="flex items-center justify-between">
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="blur">
            <ModalInfo exercise={exercise} isFavorite />
          </Modal>
          <span className="border-b-4 border-primary capitalize px-2">{exercise.bodyPart}</span>

          <Button
            isIconOnly
            size="sm"
            radius="full"
            variant="light"
            aria-label={`Remove ${exercise.name} from favorites`}
            onPress={() => removeWorkout(exercise.id)}
            className="min-w-7 w-7 h-7"
          >
            <IoTrashOutline size={16} />
          </Button>
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          <div className="flex items-center gap-2 pb-2">
            <h4 className="uppercase text-xl">{exercise.name}</h4>

            <Button
              isIconOnly
              size="sm"
              radius="full"
              variant="light"
              aria-label={`Quick info about ${exercise.name}`}
              onPress={onOpen}
              className="min-w-6 w-6 h-6"
            >
              <IoIosInformation size={15} className="bg-primary-50 rounded-full" />
            </Button>
          </div>

          <Chip isDisabled color="primary" size="sm" className="uppercase">
            {exercise.target}
          </Chip>
          <div className="mt-2 flex gap-1 flex-wrap">
            {exercise.secondaryMuscles.map((item) => (
              <Chip variant="bordered" key={item} size="sm">
                {item}
              </Chip>
            ))}
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default SmallExerciseCard;
