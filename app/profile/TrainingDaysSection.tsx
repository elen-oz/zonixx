"use client";

import {useEffect} from "react";
import DayExerciseList from "@/components/DayExerciseList";
import type {TrainingDay} from "@/types/api"

const TrainingDaysSection = () => {
    const days: TrainingDay[] = ['trainingDay1', 'trainingDay2', 'trainingDay3'];

    return (
        <section>
            <h2 className='big-title text-3xl md:text-5xl'>Workout Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-2 border-primary rounded-lg p-4">
                {days.map((day: TrainingDay) => (
                    <div key={day} className="border-2 rounded-lg p-4">
                        <DayExerciseList day={day}/>
                    </div>))}


            </div>
        </section>
    )
}

export default TrainingDaysSection;