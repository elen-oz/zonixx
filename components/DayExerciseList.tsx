'use client';

import { IoIosInformation, IoIosRemove } from 'react-icons/io';
import { useTrainingDaysStore } from '@/store/useTrainingDaysStore';
import type { Exercise, TrainingDay } from '@/types/api';
import React, { useState } from 'react';
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
  const removeExerciseFromDay = useTrainingDaysStore((state) => state.removeExerciseFromDay);
  const exercises = useTrainingDaysStore((state) => state[day]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // One modal for the whole day, showing whichever exercise was clicked.
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleInfoClick = (e: React.MouseEvent, exercise: Exercise) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedExercise(exercise);
    onOpen();
  };

  return (
    <div className="">
      <div className="text-center">
        <h3 className="inline-block px-4 border-b-2 border-primary">{getDayTitle(day)}</h3>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="blur">
        {selectedExercise && <ModalInfo exercise={selectedExercise} isFavorite />}
      </Modal>

      <ol className="list-decimal px-4 mb-4">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex items-center justify-between capitalize">
            <div className="flex items-center justify-between gap-2">
              <IoIosInformation
                onClick={(e) => handleInfoClick(e, exercise)}
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
