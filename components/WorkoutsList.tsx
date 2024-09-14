"use client";

import { useWorkouts } from "@/hooks/useWorkouts";

const WorkoutsList = () => {
  const { workouts } = useWorkouts();

  return (
    <div>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutsList;
