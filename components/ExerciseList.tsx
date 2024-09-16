import { ExerciseData } from "@/app/exercises/page";
import ExerciseListClient from "./ExerciseListClient";

type ExerciseListServerProps = {
  exercises: ExerciseData[];
};

export default function ExerciseListServer({
  exercises,
}: ExerciseListServerProps) {
  return <ExerciseListClient exercises={exercises} />;
}
