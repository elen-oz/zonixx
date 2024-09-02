import BodyPartCard from './BodyPartCard';

type BodyPartsListProps = {
  bodyParts: string[];
  isBodyParts: boolean;
  bodyPart: string;
  setBodyPart: any;
};

const BodyPartsList = ({
  bodyParts,
  isBodyParts,
  bodyPart,
  setBodyPart,
}: BodyPartsListProps) => {
  return (
    <ul className='py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center'>
      {bodyParts.map((item, index) => (
        <li key={index}>
          {isBodyParts && (
            <BodyPartCard
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default BodyPartsList;
