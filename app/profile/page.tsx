import WorkoutsList from "@/components/WorkoutsList";

const MyPage = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2>My mesurments</h2>
        <a href="https://www.youtube.com/watch?v=15qMh8C1Wzo" target="_blank">
          Youtube tutorial: How To Make Beautiful Charts In Next.js
        </a>
      </div>
      <div>
        <h2>My Workouts</h2>
        {/*<a href='https://www.youtube.com/watch?v=__mSgDEOyv8' target='_blank'>*/}
        {/*  Youtube tutorial PocketBase*/}
        {/*</a>*/}
        <WorkoutsList />
      </div>
    </div>
  );
};

export default MyPage;
