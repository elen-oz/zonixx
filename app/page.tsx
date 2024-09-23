import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@nextui-org/button';
import HeroImg from '@/app/assets/images/hero.webp'
import ImgSection2 from '@/app/assets/images/hero4.webp'
import ImgSection3 from '@/app/assets/images/hero6.webp'

export default function Home() {
    return (
        <div className='w-full py-12'>
            <div className='text-center w-full mx-auto px-4 sm:px-6 lg:px-8 z-20'>
                <section className='mb-10'>
                    <h1 className='text-md uppercase'>
                        Achieve your fitness goals
                    </h1>
                    <h2 className='big-title max-w-[700px] mx-auto'>find your strength</h2>
                    <div className='relative'>
                        <Image src={ImgSection2} alt='Hero image' width={1112} height={742}
                               className="w-full h-[600px] object-cover rounded-[4rem]"></Image>
                        <div
                            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
                            <h2 className="text-white big-title">inside <br/>and out.</h2>
                            <Button
                                as={Link}
                                href='/exercises'
                                className='font-semibold text-white uppercase'
                                variant="ghost"
                                radius="none"
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className='mt-12 w-[500px] mx-auto'>
                        <h3 className="text-5xl my-7">Fitness should be <br/>accessible to everyone.</h3>
                        <p className='mb-7'>Whether you are a seasoned athlete looking to push your limits or just
                            starting
                            out on your
                            fitness journey, we have a diverse range of state-of-the-art equipment and expertly-led
                            classes
                            to suit your individual needs and goals. Our comprehensive app is designed to provide you
                            with a
                            complete and personalized workout experience. </p>
                        <Button
                            as={Link}
                            href='/exercises'
                            className='font-semibold capitalize'
                            variant="ghost"
                            radius="full"
                        >
                            Join today
                        </Button>
                    </div>
                </section>

                <section className='mb-10'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-5xl my-7">Trainings</h2>
                        <Button
                            as={Link}
                            href='/exercises'
                            className='font-semibold'
                            variant="light"
                            radius="full"
                        >
                            See all...
                        </Button>
                    </div>

                    <div className='relative'>
                        <Image src={HeroImg} alt='image' width={1112} height={742}
                               className="w-full h-[600px] object-cover rounded-[4rem]"></Image>
                        <div
                            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
                            <h2 className="text-white big-title">over 1300 <br/> exercises</h2>
                            <Button
                                as={Link}
                                href='/exercises'
                                className='font-semibold text-white uppercase'
                                variant="ghost"
                                radius="none"
                            >
                                Get started
                            </Button>
                        </div>
                    </div>
                </section>

                <section className='mb-10'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-5xl my-7">Personal profile</h2>
                        <Button
                            as={Link}
                            href='/exercises'
                            className='font-semibold uppercase'
                            variant="light"
                            radius="full"
                        >
                            See all...
                        </Button>
                    </div>

                    <div className='relative'>
                        <Image src={ImgSection3} alt='image' width={1112} height={742}
                               className="w-full h-[600px] object-cover rounded-[4rem]"></Image>
                        <div
                            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
                            <h2 className="text-white big-title">track your <br/>progress</h2>
                            <Button
                                as={Link}
                                href='/profile'
                                className='text-white font-semibold capitalize'
                                variant="ghost"
                                radius="full"
                            >
                                join today
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
