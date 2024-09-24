"use client";

import DayExerciseList from "@/components/DayExerciseList";
import type {Day} from "@/types/api"

{/* const { day1, day2, day3, addExerciseToDay, removeExerciseFromDay, loadExercises } = useExerciseStore();

                // Загрузить упражнения при инициализации приложения
                useEffect(() => {
                    loadExercises();
                }, []);

                // Добавить новое упражнение
                addExerciseToDay('day1', { id: 7, name: "Берпи", description: "3 подхода по 10 повторений" });

                // Удалить упражнение
                removeExerciseFromDay('day2', 3); */
}

const TrainingDaysSection = () => {
    const days: Day[] = ['day1', 'day2', 'day3'];

    return (
        <section>
            <h2 className='big-title text-3xl md:text-5xl'>Workout Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-2 border-primary rounded-lg p-4">
                {days.map((day: Day) => (
                    <div key={day} className="border-2 rounded-lg p-4">
                        <DayExerciseList day={day}/>
                    </div>))}


            </div>
        </section>
    )
}

export default TrainingDaysSection;