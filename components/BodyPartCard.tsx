import { Chip } from '@nextui-org/react';

type BodyPartCardProps = {
  item: any;
  setBodyPart: any;
};

const BodyPartCard = ({ item, setBodyPart }: BodyPartCardProps) => (
  <Chip
    onClick={() => setBodyPart(item)}
    className="bg-blue-50 hover:cursor-pointer active:bg-primary active:text-white"
  >
    {item}
  </Chip>
);

export default BodyPartCard;
