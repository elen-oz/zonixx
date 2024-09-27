import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip } from '@nextui-org/react';
import Image from 'next/image';
import type { Exercise } from '@/types/api';
import { AddWorkoutButton } from './AddWorkoutButton';

type ModalInfoProps = {
  exercise: Exercise;
  isFavorite: boolean;
};

const ModalInfo = ({ exercise, isFavorite = false }: ModalInfoProps) => {
  const getImagePath = (exerciseName: string) => {
    const fileName = exerciseName.toLowerCase().replace(/\s+/g, '-');
    return `/images/initial-exercises/${fileName}.webp`;
  };

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1 capitalize">{exercise.name}</ModalHeader>
          <ModalBody>
            <Image
              src={exercise.gifUrl || getImagePath(exercise.name)}
              alt={exercise.name}
              width={370}
              height={370}
              className="object-cover rounded-xl"
            />

            <div>
              <span className="">Target: </span>
              <Chip className="uppercase" isDisabled color="primary">
                {exercise.target}
              </Chip>
            </div>

            <div className="flex gap-1 flex-wrap">
              <span className="inline">Secondary muscles: </span>
              {exercise.secondaryMuscles.map((item: string) => (
                <Chip key={item} className="capitalize">
                  {item}
                </Chip>
              ))}
            </div>

            <h3>Instructions:</h3>
            <ol className="list-decimal list-inside">
              {exercise.instructions.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" radius="none" onPress={onClose}>
              Close
            </Button>
            {!isFavorite && <AddWorkoutButton exercise={exercise} />}
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default ModalInfo;
