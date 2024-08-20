import ExerciseList from '../components/ExerciseList';

export default function Home() {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-between'>
        <h2 className='text-3xl font-extrabold text-black pb-5 dark:text-white sm:text-4xl'>
          search workout
        </h2>
      </div>
      <ExerciseList />
    </>
  );
}
