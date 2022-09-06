import { WorkoutLogData } from "../pages/WorkoutLogPage";



interface WorkoutLogProps{
    workoutLog: WorkoutLogData;
}
export default function WorkoutLog({workoutLog}:WorkoutLogProps){
    return <div>
        <h3>User Id: {workoutLog.userId}</h3>
        <h3>Workout Id: {workoutLog.workoutId}</h3>
        <p>Comment: {workoutLog.comment}</p>
        <p>Completed: {workoutLog.completed}</p>
        <p>Date: {workoutLog.dateCompleted.toString()}</p>
    </div>



}


