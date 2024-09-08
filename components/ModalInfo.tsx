import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
} from '@nextui-org/react';

type ModalInfoProps = {
  exercise: any;
};

const ModalInfo = ({ exercise }: ModalInfoProps) => {
  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1 capitalize'>
              {exercise.name}
            </ModalHeader>
            <ModalBody>
              <img
                alt={exercise.name}
                className='object-cover rounded-xl'
                src={exercise.gifUrl}
                width={370}
              />
              <div>
                <span className=''>Target: </span>
                <Chip className='bg-warning-500 text-white'>
                  {exercise.target}
                </Chip>
              </div>

              <div className='flex gap-1 flex-wrap'>
                <span className='inline'>Secondary muscles: </span>
                {exercise.secondaryMuscles.map((item: string, index: any) => (
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
              <Button color='primary' onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
};

export default ModalInfo;
