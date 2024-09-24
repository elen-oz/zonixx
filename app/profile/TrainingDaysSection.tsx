"use client";

import DayExerciseList from "@/components/DayExerciseList";
import type {TrainingDay} from "@/types/api"

const TrainingDaysSection = () => {
    const days: TrainingDay[] = ['trainingDay1', 'trainingDay2', 'trainingDay3'];

    return (
        <section>
            <h2 className='big-title text-3xl md:text-5xl'>Workout Plan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-4">
                {days.map((day: TrainingDay, index: number) => (
                    <div
                        key={day}
                        className={`p-4 ${
                            index !== 0 ? 'border-l-2 border-primary' : ''
                        }`}
                    >
                        <DayExerciseList day={day}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrainingDaysSection;