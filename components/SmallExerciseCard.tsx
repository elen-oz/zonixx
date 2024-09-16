'use client';

import React from 'react';
import {
    Modal,
    useDisclosure,
    Chip,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from '@nextui-org/react';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import Link from 'next/link';
import {ExerciseData} from '@/app/exercises/page';
import ModalInfo from './ModalInfo';
import {AddWorkoutButton} from './AddWorkoutButton';

type ExerciseCardProps = {
    exercise: ExerciseData;
};

const SmallExerciseCard = ({exercise}: ExerciseCardProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <Card className='h-full pb-4 justify-between hover:shadow-xl hover:transition-all ease-in-out hover:border-1'>
            <CardHeader className='flex items-center justify-between'>
                <IoIosInformationCircleOutline
                    onClick={onOpen}
                    size={40}
                    className='p-2 cursor-pointer'
                />

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
                    <ModalInfo exercise={exercise}/>
                </Modal>

                <div className=''>
                    <AddWorkoutButton exercise={exercise}
                                      additionStyle={'border-2 border-primary bg-white text-primary text-sm hover:bg-primary hover:text-white'}>Add</AddWorkoutButton>
                </div>
            </CardHeader>
            <Link href={`/exercises/${exercise.id}`} className='h-full'>
                <CardBody className='overflow-visible py-2'>
                    <h4 className='text-tiny uppercase font-bold pb-2'>
                        {exercise.name}
                    </h4>
                    <Chip className='bg-success-500 text-white'>{exercise.target}</Chip>
                    <div className='mt-2 flex gap-1'>
                        {exercise.secondary_muscles.map(item => (
                            <Chip className='bg-warning-500 text-white'>{item}</Chip>
                        ))}
                    </div>

                </CardBody>
            </Link>
        </Card>
    );
};

export default SmallExerciseCard;
