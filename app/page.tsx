import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@nextui-org/button';
import HeroImg from '@/app/assets/images/hero.webp'

export default function Home() {
    return (
        <div className='w-full flex flex-col items-center justify-center py-12'>
            <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
                <h1 className='text-md uppercase'>
                    Achieve your fitness goals
                </h1>
                <h2 className='big-title max-w-[700px] mx-auto'>find your strength</h2>
                <div className='relative'>
                    <Image src={HeroImg} alt='Hero image' width={1112} height={742} className="w-full h-[600px] object-cover rounded-[4rem]"></Image>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
                        <h2 className="text-white big-title">inside <br/>and out.</h2>
                        {/*<div className='mt-12 '>*/}
                            <Button
                                as={Link}
                                href='/exercises'
                                className='font-semibold text-white'
                                variant="ghost"
                                radius="none"
                            >
                                Get started
                            </Button>
                        {/*</div>*/}
                    </div>

                </div>
                {/*<div className='mt-12 inline-flex'>*/}
                {/*    <Button*/}
                {/*        as={Link}*/}
                {/*        href='/exercises'*/}
                {/*        className='font-semibold'*/}
                {/*        variant="ghost"*/}
                {/*        radius="none"*/}
                {/*    >*/}
                {/*        Get started*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
