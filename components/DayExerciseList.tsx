"use client";

import {IoIosInformation, IoIosRemove} from "react-icons/io";
import {useTrainingDaysStore} from '@/store/useTrainingDaysStore';
import AddExerciseToDayDropdown from "./AddExerciseToDayDropdown";
import type {TrainingDay} from "@/types/api"
import React, {useEffect} from "react";
import {Modal, useDisclosure} from "@nextui-org/react";
import ModalInfo from "@/components/ModalInfo";

interface DayExerciseListProps {
    day: TrainingDay;
}

export default function DayExerciseList({day}: DayExerciseListProps) {
    const {
        // trainingDay1,
        // trainingDay2,
        // trainingDay3,
        removeExerciseFromDay,
        loadExercises
    } = useTrainingDaysStore();
    const exercises = useTrainingDaysStore((state) => state[day]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    const handleInfoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onOpen();
    };

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <div className=''>
            <h3 className="text-center">{day === 'trainingDay1' ? 'Day 1' : day === 'trainingDay2' ? 'Day 2' : 'Day 3'}</h3>

            <ol className='list-decimal px-4 mb-4'>
                {exercises.map((exercise) => (
                    <li key={exercise.id} className='flex items-center justify-between capitalize'>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' backdrop='blur'>
                            <ModalInfo exercise={exercise} isFavorite={true}/>
                        </Modal>
                        <div className='flex items-center justify-between gap-2'>
                            <IoIosInformation
                                onClick={handleInfoClick}
                                size={15}
                                className='cursor-pointer bg-primary-100 hover:bg-primary-50 rounded-full'
                            />
                            <span>{exercise.name}</span>
                        </div>


                        <IoIosRemove onClick={()=>removeExerciseFromDay(day, exercise.id)} className='cursor-pointer hover:bg-primary-50 rounded-full'/>
                    </li>
                ))}

            </ol>
            <div className='mx-auto'>
                <AddExerciseToDayDropdown day={day}/>
            </div>
        </div>
    );
}