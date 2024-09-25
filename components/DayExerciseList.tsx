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

const DayExerciseList = ({ day }: DayExerciseListProps) => {
  const {
    // trainingDay1,
    // trainingDay2,
    // trainingDay3,
    removeExerciseFromDay,
    loadExercises,
  } = useTrainingDaysStore();
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
        <h3 className="inline-block px-4 border-b-2 border-primary">
          {day === 'trainingDay1' ? 'Day 1' : day === 'trainingDay2' ? 'Day 2' : 'Day 3'}
        </h3>
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
