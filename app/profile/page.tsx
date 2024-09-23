import Image from 'next/image';
import DayExerciseList from "@/components/DayExerciseList";
import FavoriteWorkoutsList from "@/components/FavoriteWorkoutsList";
// import HeroImage from "@/app/assets/images/hero3.webp";
import HeroImage from "@/app/assets/images/hero1.webp";


const MyPage = () => {
    type day = 'day1' | 'day2' | 'day3';
    const days: day[] = ['day1', 'day2', 'day3'];

    return (
        <div className='pb-4'>
            <section className='w-full py-12 text-center mx-auto px-4 sm:px-6 lg:px-8 z-20'>
                <h1 className='big-title text-2xl'>
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

            <section>
                <h2 className='big-title text-2xl'>Workout Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-2 border-primary rounded-lg p-4">
                    {days.map((day: day) => (<div className="border-2 rounded-lg p-4">
                        <DayExerciseList day={day}/>
                    </div>))}

                    {/*<div>*/}
                    {/*  <h2>My mesurments</h2>*/}
                    {/*  <a href="https://www.youtube.com/watch?v=15qMh8C1Wzo" target="_blank">*/}
                    {/*    Youtube tutorial: How To Make Beautiful Charts In Next.js*/}
                    {/*  </a>*/}
                    {/*</div>*/}
                </div>
            </section>

            <section>
                <h2 className='big-title text-2xl'>My Favorite Workouts</h2>
                <FavoriteWorkoutsList/>
            </section>
        </div>
    );
};

export default MyPage;
