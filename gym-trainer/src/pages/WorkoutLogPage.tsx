import { useContext, useEffect, useState } from "react";
import WorkoutLog from "../components/WorkoutLog";
import { AppUser, AppUserContext } from "../context/AppUserProvider";
import { BACKEND_API } from "../util/ApiConfig";

export interface WorkoutLogData {
  user: any;
  workout: any;
  notes: string;
  completed: boolean;
  date: Date;
}

//const appUser = useContext(AppUserContext)

const tempWorkoutLog: Array<WorkoutLogData> = [
  {
    user: {
      id: 1,
      username: "Test1",
      firstName: null,
      lastName: null,
      height: null,
      weight: null,
      age: null,
      gender: null,
      bio: null,
    },
    workout: { id: 1, category: null, description: null, exercises: [] },
    notes: "test comment",
    completed: false,
    date: new Date("2022-01-02"),
  },
  {
    user: {
      id: 1,
      username: "Test2",
      firstName: null,
      lastName: null,
      height: null,
      weight: null,
      age: null,
      gender: null,
      bio: null,
    },
    workout: { id: 2, category: null, description: null, exercises: [] },
    notes: "test comment",
    completed: true,
    date: new Date("2021-02-01"),
  },
];

export default function WorkoutLogPage() {
  let appUser = useContext(AppUserContext);

  const [workoutLog, setWorkoutLog] = useState<Array<WorkoutLogData> | null>(
    null
  );

  useEffect(pageLoad,[]);
  function pageLoad() {
    fetchWorkoutLog();
    // setWorkoutLog(fetchWorkoutLogData());
  }
  async function fetchWorkoutLog() {
    // take Workout Log data and display on the page
    //   WORKOUT_API.get('exercise?language=2')
    //   .then(response => setExercises(mapData(response.data)))
    console.log(appUser?.id);
    const res: any = await BACKEND_API.get(`log/user/${appUser?.id}`);

    console.log(res.data);
    console.log(tempWorkoutLog);
  
    setWorkoutLog(mapData(res.data));
  }

  function mapData(data: any): Array<WorkoutLogData> {
    return data.map(
      ({ user, workout, notes, completed, date }: any) => {
        return {
          user: user,
          workout: workout,
          notes: notes,
          completed: completed,
          date:  new Date(date ),
        };
      }
    );
  }
  return !workoutLog ? (
    <LoadingBar />
  ) : (
    <>
      {workoutLog.map((workoutLog: WorkoutLogData, i) => (
        <WorkoutLog key={i} workoutLog={workoutLog} />
      ))}
    </>
  );
}

function LoadingBar() {
  // TODO: replace with an actual loading bar
  return <h1>Loading...</h1>;
}