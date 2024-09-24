"use client";

import {useState, useEffect} from "react";
import type {Exercise} from "@/types/api";
import SearchExercises from "@/components/SearchExercises";
import ExerciseList from "@/components/ExerciseList";
import {Chip} from "@nextui-org/react";
import {fetchData, exerciseOptions} from "@/lib/fetchData";

const bodyParts = [
    "all",
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
];

export default function ExercisesClient({allExercises}: { allExercises: Exercise[] }) {
    const [exercises, setExercises] = useState<Exercise[]>(allExercises);

    useEffect(() => {
        console.info("[Client] Component mounted");
        console.info(`[Client] Initialized with ${allExercises.length} exercises`);
    }, [allExercises]);

    const fetchExercisesByBodyPart = async (selectedBodyPart: string = "all") => {
        console.info(`[Client] Fetching exercises for body part: ${selectedBodyPart}`);
        try {
            const url =
                selectedBodyPart === "all"
                    ? "/api/exercises"
                    : `/api/exercises/${selectedBodyPart}`;

            const data = await fetchData(url, exerciseOptions);
            console.info(`[Client] Fetched ${data?.length || 0} exercises for ${selectedBodyPart}`);
            setExercises(data);
        } catch (error) {
            console.error("[Client] Error fetching exercise data:", error);
        }
    };

    const handleBodyPartChange = async (newBodyPart: string) => {
        console.info(`[Client] Body part changed to: ${newBodyPart}`);
        await fetchExercisesByBodyPart(newBodyPart);
    };

    const handleExercisesData = (data: Exercise[]) => {
        console.info(`[Client] Search results: ${data.length} exercises`);
        setExercises(data);
    };

    return (
        <>
            <div className="w-full flex flex-col items-center justify-between">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    Exercises
                </h2>
                <SearchExercises handleExercisesData={handleExercisesData}/>
                <ul className="py-8 w-full md:px-10 max-w-[550px] flex gap-1 flex-wrap justify-center">
                    {bodyParts.map((item, index) => (
                        <li key={index}>
                            <Chip
                                onClick={() => handleBodyPartChange(item)}
                                className="bg-blue-50 hover:cursor-pointer active:bg-primary active:text-white"
                            >
                                {item}
                            </Chip>
                        </li>
                    ))}
                </ul>
            </div>
            <ExerciseList exercises={exercises}/>
        </>
    );
}