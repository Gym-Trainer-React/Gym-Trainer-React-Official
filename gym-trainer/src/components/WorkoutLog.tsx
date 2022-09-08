import { WorkoutLogData } from "../pages/WorkoutLogPage";
import { AppUserContext } from "../context/AppUserProvider";
import { useContext, useState } from "react";
import { WORKOUT_API } from "../util/ApiConfig";




interface WorkoutLogProps{
    workoutLog: WorkoutLogData;
}

const appUser = useContext(AppUserContext)

export default function WorkoutLog({workoutLog}:WorkoutLogProps){

    
    
    return <div>
        <h3>User: {appUser?.username}</h3>
        <p>Comment: {workoutLog.comment}</p>
        <p>Completed: {workoutLog.completed}</p>
        <p>Date: {workoutLog.dateCompleted.toString()}</p>
    </div>

}

const [log, setWorkoutLog] = useState<WorkoutLogData | null>(null)

// WORKOUT_API.post("/log", submitWorkoutLogData)
//     .then((response) => {
//         setWorkoutLog(response.data)
//     })

// function submitWorkoutLogData({}:WorkoutLogProps){
//     const workoutLog : {
//       userId: appUser,
//       workoutId:
//       comment:
//       completed: 
//       dateCompleted: new Date()

//     }   
//   }
