import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full flex flex-col items-center justify-center p-24'>
      <div className=' dark:bg-gray-800 '>
        <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
          <h2 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>
            <span className='block'>my workout</span>
          </h2>
          <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-12 inline-flex rounded-md shadow'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
