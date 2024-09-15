"use client";

import { useWorkouts } from "@/hooks/useWorkouts";

const WorkoutsList = () => {
  const { workouts } = useWorkouts();

  return (
    <div>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutsList;
