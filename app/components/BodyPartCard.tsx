type BodyPartCardProps = {
  item: any;
  bodyPart: string;
  setBodyPart: any;
};

const BodyPartCard = ({ item, bodyPart, setBodyPart }: BodyPartCardProps) => {
  return (
    <div
      className={` whitespace-nowrap text-sm flex items-center justify-center border-2 border-blue-400 rounded-full  px-6 py-2 ${
        bodyPart === item ? 'bg-blue-800 text-white' : 'bg-blue-200'
      }`}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      {item}
    </div>
  );
};

export default BodyPartCard;
