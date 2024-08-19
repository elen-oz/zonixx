import SearchExercises from '../components/SearchExercises';

export default function Home() {
  return (
    <main className='w-full p-24'>
      <div className='w-full text-center flex flex-col items-center justify-between'>
        <h2 className='text-3xl font-extrabold text-black pb-5 dark:text-white sm:text-4xl'>
          see workout
        </h2>

        <SearchExercises />
      </div>
    </main>
  );
}
