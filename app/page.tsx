import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center py-12'>
      <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
        <h2 className='text-3xl font-extrabold text-black sm:text-4xl'>
          <span className='block'>Want to be millionaire ?</span>
          <span className='block text-primary'>It&#x27;s today or never.</span>
        </h2>
        <div className='mt-12 inline-flex'>
          <Button
            as={Link}
            href='/exercises'
            // color='danger'
            className='font-semibold shadow'
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
