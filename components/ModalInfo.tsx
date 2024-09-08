import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from '@nextui-org/react';

type ModalInfoProps = {
  // isOpen: boolean;
  exercise: any;
};

const ModalInfo = ({ exercise }: ModalInfoProps) => {
  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              {exercise.name}
            </ModalHeader>
            <ModalBody>
              {/* <Image
              alt={exercise.name}
              className='object-cover rounded-xl'
              src={exercise.gifUrl}
              width={370}
            /> */}
              <img
                alt={exercise.name}
                className='object-cover rounded-xl'
                src={exercise.gifUrl}
                width={370}
              />
              <div>
                <span className='inline'>Target: </span>
                <span className='inline font-bold bg-warning-500 text-white rounded-full px-1 '>
                  {exercise.target}
                </span>
              </div>

              <div className='flex gap-1 justify-center flex-wrap'>
                {exercise.secondaryMuscles.map((item, index) => (
                  <Chip key={index} className='bg-warning-500 text-white'>
                    {item}
                  </Chip>
                ))}
              </div>

              <h3 className='font-semibold'>Instructions:</h3>
              <ol className='list-decimal list-inside'>
                {exercise.instructions.map((item, index) => (
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
