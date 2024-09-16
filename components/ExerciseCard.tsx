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
    Image
} from '@nextui-org/react';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import Link from 'next/link';
import {ExerciseData} from '@/app/exercises/page';
import ModalInfo from './ModalInfo';
import {AddWorkoutButton} from './AddWorkoutButton';

type ExerciseCardProps = {
    exercise: ExerciseData;
};

const ExerciseCard = ({exercise}: ExerciseCardProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    // todo: fix gifs display

    return (
        <Card className='h-full pb-4 justify-between hover:shadow-xl hover:transition-all ease-in-out hover:border-1'>
            <CardHeader className='flex items-center justify-between'>
                <IoIosInformationCircleOutline
                    onClick={onOpen}
                    size={40}
                    className='p-2 cursor-pointer'
                />

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
                    <ModalInfo exercise={exercise} isFavorite={false}/>
                </Modal>

                <div className=''>
                    <AddWorkoutButton exercise={exercise} secondary={true}>Add</AddWorkoutButton>
                </div>
            </CardHeader>
            <Link href={`/exercises/${exercise.id}`} className='h-full'>
                <CardBody className='overflow-visible py-2'>
                <Image
                        isZoomed
                        alt={exercise.name}
                        className='object-cover rounded-xl h-full'
                        src={exercise.gif_url}
                        width={270}
                        height={270}
                        fallbackSrc="https://via.placeholder.com/270x270"
                    />
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
