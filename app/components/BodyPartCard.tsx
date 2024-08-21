import { Chip } from '@nextui-org/react';

type BodyPartCardProps = {
  item: any;
  bodyPart: string;
  setBodyPart: any;
};

const BodyPartCard = ({ item, bodyPart, setBodyPart }: BodyPartCardProps) => {
  return (
    <Chip
      onClick={() => setBodyPart(item)}
      // variant='flat'
      className='bg-blue-50 hover:cursor-pointer active:bg-primary active:text-white'
    >
      {item}
    </Chip>
  );
};

export default BodyPartCard;
