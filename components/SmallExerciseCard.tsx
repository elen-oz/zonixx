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
import type {Exercise} from "@/types/api";
import ModalInfo from './ModalInfo';

type ExerciseCardProps = {
    exercise: Exercise;
};

const SmallExerciseCard = ({exercise}: ExerciseCardProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleInfoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onOpen();
    };

    return (
        <Card className='h-full pb-4 justify-between hover:shadow-xl hover:transition-all ease-in-out hover:border-1'>
            <Link href={`/exercises/${exercise.id}`} className='h-full'>

                <CardHeader className='flex items-center justify-between'>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' backdrop='blur'>
                        <ModalInfo exercise={exercise} isFavorite={true}/>
                    </Modal>
                    <span className='border-b-4 border-primary capitalize px-2'>{exercise.bodyPart}</span>

                    <IoIosInformationCircleOutline
                        onClick={handleInfoClick}
                        size={40}
                        className='p-2 cursor-pointer'
                    />
                </CardHeader>

                {/*<Link href={`/exercises/${exercise.id}`} className='h-full'>*/}
                <CardBody className='overflow-visible py-2'>
                    <h4 className='text-tiny uppercase font-bold pb-2'>
                        {exercise.name}
                    </h4>

                    <Chip isDisabled color="primary">{exercise.target}</Chip>
                    <div className='mt-2 flex gap-1 flex-wrap'>
                        {exercise.secondaryMuscles.map(item => (
                            <Chip variant="bordered" key={item}>{item}</Chip>
                        ))}
                    </div>

                </CardBody>
            </Link>
        </Card>
    );
};

export default SmallExerciseCard;
