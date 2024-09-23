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
// import {ExerciseData} from '@/app/exercises/page';
import type {Exercise} from "@/types/api";
import ModalInfo from './ModalInfo';
import {AddWorkoutButton} from './AddWorkoutButton';
import NoImage from 'noimage.png';

type ExerciseCardProps = {
    exercise: Exercise;
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
                    {/*<Image*/}
                    {/*        isZoomed*/}
                    {/*        alt={exercise.name}*/}
                    {/*        className='object-cover rounded-xl h-full'*/}
                    {/*        src={exercise.gifUrl}*/}
                    {/*        width={270}*/}
                    {/*        height={270}*/}
                    {/*        fallbackSrc="https://via.placeholder.com/270x270"*/}
                    {/*    />*/}
                    {exercise.gifUrl ? <img
                        alt={exercise.name}
                        className='object-cover rounded-xl h-full'
                        src={exercise.gifUrl}
                    /> : <Image
                        src="/noimage.png"
                        alt="No image available"
                        className='w-full h-auto object-contain'
                        width={450}
                        height={270}
                    />}
                </CardBody>
                <CardFooter className='flex-col justify-between'>
                    <h4 className='text-tiny uppercase font-bold pb-2'>
                        {exercise.name}
                    </h4>
                    <Chip className='uppercase' isDisabled color="primary">{exercise.target}</Chip>
                </CardFooter>
            </Link>
        </Card>
    );
};

export default ExerciseCard;
