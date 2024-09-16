import DayExerciseList from "@/components/DayExerciseList";
import FavoriteWorkoutsList from "@/components/FavoriteWorkoutsList";

const MyPage = () => {
    type day = 'day1' | 'day2' | 'day3';
    const days: day[] = ['day1', 'day2', 'day3'];

    return (
        <>
            <h1 className='text-center font-bold'>Profile Page</h1>

            <section>
                <h2>Workout Plan</h2>
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
                <h2 className=''>My Favorite Workouts</h2>
                <FavoriteWorkoutsList/>
            </section>
        </>
    );
};

export default MyPage;
