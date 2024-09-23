import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@nextui-org/button';

export default function Home() {
    return (
        <div className='w-full flex flex-col items-center justify-center py-12'>
            <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
                <h1 className='text-md text-black uppercase'>
                    Achieve your fitness goals
                </h1>
                <h2 className='max-w-[700px] mx-auto '>
                    <span className='block big-title'>find your strength</span>
                    {/*<span className='block font-heading text-primary'>It&#x27;s today or never.</span>*/}
                    <span className='block text-primary big-title'>inside <br/>and out.</span>
                </h2>
                <div className='mt-12 inline-flex'>
                    <Button
                        as={Link}
                        href='/exercises'
                        className='button font-semibold shadow'
                    >
                        Get started
                    </Button>
                </div>
            </div>
        </div>
    );
}
