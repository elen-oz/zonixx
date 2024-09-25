import BodyPartCard from './BodyPartCard';

type BodyPartsListProps = {
  bodyParts: string[];
  isBodyParts: boolean;
  setBodyPart: any;
};

const BodyPartsList = ({ bodyParts, isBodyParts, setBodyPart }: BodyPartsListProps) => (
  <ul className="py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center">
    {bodyParts.map((item) => (
      <li key={item}>{isBodyParts && <BodyPartCard item={item} setBodyPart={setBodyPart} />}</li>
    ))}
  </ul>
);

export default BodyPartsList;
