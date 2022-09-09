import { WorkoutLogData } from "../pages/WorkoutLogPage";
import { AppUserContext } from "../context/AppUserProvider";
import { useContext, useState } from "react";
import { WORKOUT_API } from "../util/ApiConfig";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface WorkoutLogProps{
    workoutLog: WorkoutLogData;
}

// export default function WorkoutLog({workoutLog}:WorkoutLogProps){
   
//     return <div>
//         <h3>User: {appUser?.username}</h3>
//         <p>Comment: {workoutLog.comment}</p>
//         <p>Completed: {workoutLog.completed}</p>
//         <p>Date: {workoutLog.dateCompleted.toString()}</p>
//     </div>

// }

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );



export default function WorkoutLog({workoutLog}:WorkoutLogProps){
    const appUser = useContext(AppUserContext)
    const [log, setWorkoutLog] = useState<WorkoutLogData | null>(null)

    function submitWorkoutLogData(workoutLog:WorkoutLogProps){         
      WORKOUT_API.post("/log", workoutLog)
      .then((response) => {
          setWorkoutLog(response.data)
      })
    }
    
    const card = (
        <React.Fragment>
          <CardContent  >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Username : {workoutLog.user?.username}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Workout Id: {workoutLog.workout.id}
            </Typography>
  
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Completed: {workoutLog.completed ? 'true' : 'false'}
            </Typography>
            <Typography variant="body2">
            Comment: {workoutLog.comment}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Date: {workoutLog.dateCompleted.toString()}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </React.Fragment>
       
      );

      
    return <div style={{ display:'flex', justifyContent:'center' }}>
        {/* <h3>User Id: {workoutLog.userId}</h3>
        <h3>Workout Id: {workoutLog.workoutId}</h3>
        <p>Comment: {workoutLog.comment}</p>
        <p>Completed: {workoutLog.completed ? 'true' : 'false'}</p>
        <p>Date: {workoutLog.dateCompleted.toString()}</p> */
        <Box sx={{ minWidth: 275  }}m={1}>
        <Card variant="outlined">{card}</Card>
      </Box>
      
        }
        
    </div>



}


