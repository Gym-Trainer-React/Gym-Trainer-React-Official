import { WorkoutLogData } from "../pages/WorkoutLogPage";
import { AppUserContext } from "../context/AppUserProvider";
import { useContext } from "react";



interface WorkoutLogProps{
    workoutLog: WorkoutLogData;
}

export default function WorkoutLog({workoutLog}:WorkoutLogProps){

    const appUser = useContext(AppUserContext)
    
    return <div>
        <h3>User: {appUser?.username}</h3>
        <p>Comment: {workoutLog.comment}</p>
        <p>Completed: {workoutLog.completed}</p>
        <p>Date: {workoutLog.dateCompleted.toString()}</p>
    </div>

}


