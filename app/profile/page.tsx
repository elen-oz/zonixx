import Image from 'next/image';
import HeroImage from "@/app/assets/images/hero1.webp";
import FavoriteWorkoutsSection from "@/app/profile/FavoriteWorkoutsSection";
import TrainingDaysSection from "@/app/profile/TrainingDaysSection";

const MyPage = () => {
    return (
        <div className='pb-4'>
            <section className='hidden sm:block sm:w-[400px] md:w-full py-12 text-center mx-auto px-4 sm:px-6 lg:px-8 z-20'>
                <h1 className='big-title'>
                    Profile
                </h1>
                <div className='relative'>
                    <Image src={HeroImage} alt='image' width={1112}
                           className="w-full h-[300px] md:h-[600px] object-cover rounded-[4rem]"/>
                    <div
                        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-9">
                        <h2 className="text-white big-title">your training <br/>progress</h2>

                    </div>
                </div>
            </section>

            <TrainingDaysSection />
            <FavoriteWorkoutsSection/>
        </div>
    );
};

export default MyPage;
