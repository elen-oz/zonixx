'use client';

import { IoIosInformation, IoIosRemove } from 'react-icons/io';
import { useTrainingDaysStore } from '@/store/useTrainingDaysStore';
import type { TrainingDay } from '@/types/api';
import React, { useEffect } from 'react';
import { Modal, useDisclosure } from '@nextui-org/react';
import ModalInfo from '@/components/ModalInfo';
import AddExerciseToDayDropdown from './AddExerciseToDayDropdown';

interface DayExerciseListProps {
  day: TrainingDay;
}

const getDayTitle = (day: TrainingDay): string => {
  switch (day) {
    case 'trainingDay1':
      return 'Day 1';
    case 'trainingDay2':
      return 'Day 2';
    case 'trainingDay3':
      return 'Day 3';
    default:
      return 'Unknown Day';
  }
};

const DayExerciseList = ({ day }: DayExerciseListProps) => {
  const { removeExerciseFromDay, loadExercises } = useTrainingDaysStore();
  const exercises = useTrainingDaysStore((state) => state[day]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onOpen();
  };

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  return (
    <div className="">
      <div className="text-center">
        <h3 className="inline-block px-4 border-b-2 border-primary">{getDayTitle(day)}</h3>
      </div>

      <ol className="list-decimal px-4 mb-4">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex items-center justify-between capitalize">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="blur">
              <ModalInfo exercise={exercise} isFavorite />
            </Modal>
            <div className="flex items-center justify-between gap-2">
              <IoIosInformation
                onClick={handleInfoClick}
                size={15}
                className="cursor-pointer bg-primary-50 hover:bg-primary-100 rounded-full"
              />
              <span>{exercise.name}</span>
            </div>

            <IoIosRemove
              onClick={() => removeExerciseFromDay(day, exercise.id)}
              className="cursor-pointer hover:bg-primary-50 rounded-full"
            />
          </li>
        ))}
      </ol>
      <div className="flex items-center justify-center pt-5">
        <AddExerciseToDayDropdown day={day} />
      </div>
    </div>
  );
};

export default DayExerciseList;
