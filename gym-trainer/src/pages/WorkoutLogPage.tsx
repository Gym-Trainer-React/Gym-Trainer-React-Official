import { useContext, useEffect, useState } from "react";
import WorkoutLog from "../components/WorkoutLog";
import { AppUser, AppUserContext } from "../context/AppUserProvider";

export interface WorkoutLogData {
  user: any;
  workout: any;
  comment: string;
  completed: boolean;
  dateCompleted: Date;
}

//const appUser = useContext(AppUserContext)

const tempWorkoutLog: Array<WorkoutLogData> = [
  {
    user: {id: 1, username: "Test1",firstName: null, lastName: null, height: null,weight: null,age: null, gender: null, bio: null},
    workout: {id: 1, category: null, description: null, exercises: []},
    comment: "test comment",
    completed: false,
    dateCompleted: new Date("2022-01-02"),
  },
  {
    user: {id: 1, username: "Test2",firstName: null, lastName: null, height: null,weight: null,age: null, gender: null, bio: null},
    workout: {id: 2, category: null, description: null, exercises: []},
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

