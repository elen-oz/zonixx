import {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Chip,
} from '@nextui-org/react';
// import Image from "next/image";
import {AddWorkoutButton} from './AddWorkoutButton';

type ExerciseData = {
    id: string;
    name: string;
    body_part: string;
    equipment: string;
    gif_url: string;
    target: string;
    secondary_muscles: string[];
    instructions: string[];
};

type ModalInfoProps = {
    exercise: ExerciseData;
    isFavorite?: boolean;
};

const ModalInfo = ({exercise, isFavorite = false}: ModalInfoProps) => {
    return (
        <>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1 capitalize'>
                            {exercise.name}
                        </ModalHeader>
                        <ModalBody>
                            {/*<Image alt={exercise.name}*/}
                            {/*       className='object-cover rounded-xl'*/}
                            {/*       src={exercise.gif_url}*/}
                            {/*       width={370} height={400}/>*/}
                            <img alt={exercise.name}
                                   className='object-cover rounded-xl'
                                   src={exercise.gif_url}
                                   width={370} height={400}/>

                            <div>
                                <span className=''>Target: </span>
                                <Chip className='bg-warning-500 text-white'>
                                    {exercise.target}
                                </Chip>
                            </div>

                            <div className='flex gap-1 flex-wrap'>
                                <span className='inline'>Secondary muscles: </span>
                                {exercise.secondary_muscles.map((item: string, index: any) => (
                                    <Chip key={index} className='bg-success-500 text-white'>
                                        {item}
                                    </Chip>
                                ))}
                            </div>

                            <h3 className='font-semibold'>Instructions:</h3>
                            <ol className='list-decimal list-inside'>
                                {exercise.instructions.map((item: string, index: any) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' variant='light' onPress={onClose}>
                                Close
                            </Button>
                            {!isFavorite && <AddWorkoutButton exercise={exercise}/>}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </>
    );
};

export default ModalInfo;
