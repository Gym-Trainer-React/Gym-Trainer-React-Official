import { useEffect, useState } from "react";
import WorkoutLog from "../components/WorkoutLog";

export interface WorkoutLogData {
  userId: number;
  workoutId: number;
  workoutName: string;
  comment: string;
  completed: boolean;
  dateCompleted: Date;
}

const tempWorkoutLog: Array<WorkoutLogData> = [
  {
    userId: 1,
    workoutId: 1,
    workoutName: "Test Workout1",
    comment: "test comment",
    completed: false,
    dateCompleted: new Date("2022-01-02"),
  },
  {
    userId: 2,
    workoutId: 2,
    workoutName: "Test Workout2",
    comment: "test comment",
    completed: true,
    dateCompleted: new Date("2021-02-01"),
  },
];

export default function WorkoutLogPage() {
  const [workoutLog, setWorkoutLog] = useState<Array<WorkoutLogData> | null>(
    null
  );

  useEffect(pageLoad);
  function pageLoad(){
    //   fetchWorkoutLog();
    setWorkoutLog(fetchWorkoutLogData());

  }
  function fetchWorkoutLogData(): Array<WorkoutLogData>{
      // take Workout Log data and display on the page
    //   WORKOUT_API.get('exercise?language=2')
    //   .then(response => setExercises(mapData(response.data)))
    return tempWorkoutLog;

  }

  function displayWorkoutLog() {
    // take user id and display all the workout log data
  }
//   function mapData(data:any) : Array<WorkoutLogData>{
//     return data.map(({userId,workoutId,comment,completed,dateCompleted }:any)) =>{
//         return{
//             userId: userId,
//             workoutId: workoutId,
//             comment: comment,
//             completed: completed,
//             dateCompleted: dateCompleted
//         }
//     }

//   }
return !workoutLog ? 
    
<LoadingBar /> :
<>
   {workoutLog.map((workoutLog: WorkoutLogData, i) => <WorkoutLog key={i} workoutLog={workoutLog}/>)}
</>

}


function LoadingBar(){
// TODO: replace with an actual loading bar
return <h1>Loading...</h1>
}

