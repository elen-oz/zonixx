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
import type {Exercise} from "@/types/api";
import ModalInfo from './ModalInfo';
import {AddWorkoutButton} from './AddWorkoutButton';

type ExerciseCardProps = {
    exercise: Exercise;
};

const ExerciseCard = ({exercise}: ExerciseCardProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleInfoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onOpen();
    };

    return (
        <Card isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5 hover:shadow-xl hover:transition-all ease-in-out ">
            <Link
                // href={`/exercises`}
                href={`/exercises/${exercise.id}`}
                className='h-full'
            >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' backdrop='blur'>
                        <ModalInfo
                            exercise={exercise}
                            isFavorite={false}/>
                    </Modal>

                    <div className='w-full flex items-center justify-between'>
                        <div></div>
                        {/*<p className=" text-white/60 uppercase font-bold">{exercise.target}</p>*/}

                        <IoIosInformationCircleOutline
                            onClick={handleInfoClick}
                            size={30}
                            className='cursor-pointer'
                        />
                    </div>

                    <h4 className="text-black font-medium text-2xl capitalize">{exercise.name}</h4>
                </CardHeader>
                {exercise.gifUrl ? <img
                    alt={exercise.name}
                    className="h-full object-cover"
                    src={exercise.gifUrl}
                /> : <Image
                    src="/noimage.png"
                    alt="No image available"
                    className='w-full h-auto object-contain'
                    width={450}
                    height={270}
                />
                }
                <CardFooter
                    className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                        <p className=" uppercase">{exercise.target}</p>
                    </div>

                    {/*<div onClick={(e) => e.preventDefault()}>*/}
                    <AddWorkoutButton
                        exercise={exercise}
                        secondary={false}
                        preventLinkNavigation={(e) => e.preventDefault()}
                    >
                        Add
                    </AddWorkoutButton>
                    {/*</div>*/}
                </CardFooter>
            </Link>
        </Card>

    );
};

export default ExerciseCard;
