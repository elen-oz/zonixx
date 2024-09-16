import DayExerciseList from "@/components/DayExerciseList";
import WorkoutsList from "@/components/WorkoutsList";

const MyPage = () => {
  return (
      <>
        <div>
          <h2>My Favorite Workouts</h2>
          <WorkoutsList/>
        </div>

        <div>
          <h1>Workout Plan</h1>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <DayExerciseList day="day1"/>
            <DayExerciseList day="day2"/>
            <DayExerciseList day="day3"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-2 border-primary rounded-lg p-4">
          <div className="border-2 rounded-lg p-4">
            <h3 className="text-center">1 workout day</h3>
            <ul>
              <li>exercise 1</li>
              <li>exercise 2</li>
              <li>exercose 3</li>
              <li>exercise 4</li>
            </ul>
          </div>
          <div className="border-2 rounded-lg p-4">
            <h3 className="text-center">2 workout day</h3>
            <ul>
              <li>exercise 1</li>
              <li>exercise 2</li>
              <li>exercose 3</li>
              <li>exercise 4</li>
              <li>exercise 5</li>
            </ul>
          </div>
          <div className="border-2 rounded-lg p-4">
            <h3 className="text-center">3 workout day</h3>
            <ul>
              <li>exercise 1</li>
              <li>exercise 2</li>
            </ul>
          </div>

          {/*<div>*/}
          {/*  <h2>My mesurments</h2>*/}
          {/*  <a href="https://www.youtube.com/watch?v=15qMh8C1Wzo" target="_blank">*/}
          {/*    Youtube tutorial: How To Make Beautiful Charts In Next.js*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </>
  );
};

export default MyPage;
