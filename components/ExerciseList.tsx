// import { ExerciseData } from "@/app/exercises/page";
import ExerciseListClient from "./ExerciseListClient";
import type {Exercise} from "@/types/api";

type ExerciseListServerProps = {
  exercises: Exercise[];
};

export default function ExerciseListServer({
  exercises,
}: ExerciseListServerProps) {
  return <ExerciseListClient exercises={exercises} />;
}
