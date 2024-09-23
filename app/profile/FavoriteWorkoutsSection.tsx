'use client';

import {useFavoriteWorkouts} from "@/store/useFavoriteWorkouts";
import FavoriteWorkoutsList from "@/components/FavoriteWorkoutsList";
import {Button} from "@nextui-org/button";
import Link from "next/link";


const FavoriteWorkoutsSection = () => {
    const {workouts, clearAllWorkouts} = useFavoriteWorkouts();


    return (
        <section>
            <div className="flex items-center justify-between">
                <h2 className='big-title text-2xl'>My Favorite Workouts</h2>
                {(workouts.length !== 0) && <Button onClick={clearAllWorkouts}>Clear</Button>}
            </div>
            {(workouts.length !== 0) ? <FavoriteWorkoutsList/> :
                <>
                    <div className='w-full text-center text-md py-5'>List is empty.</div>
                    <div className='w-full text-center'>
                        <Link href="/exercises" className=' uppercase text-2xl underline'>Let's add some exercises!
                        </Link>
                    </div>
                </>}
        </section>
    )
}

export default FavoriteWorkoutsSection;