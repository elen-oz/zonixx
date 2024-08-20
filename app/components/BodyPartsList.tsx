import BodyPartCard from './BodyPartCard';
import ExerciseCard from './ExerciseCard';

type BodyPartsListProps = {
  data: [];
  bodyParts: boolean;
  bodyPart: string;
  setBodyPart: any;
};

const BodyPartsList = ({
  data,
  bodyParts,
  bodyPart,
  setBodyPart,
}: BodyPartsListProps) => {
  return (
    <ul className='py-8 w-full md:px-10 lg:w-[700px] flex gap-1 flex-wrap justify-center'>
      {data.map((item, index) => (
        <li key={index}>
          {bodyParts ? (
            <BodyPartCard
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default BodyPartsList;
