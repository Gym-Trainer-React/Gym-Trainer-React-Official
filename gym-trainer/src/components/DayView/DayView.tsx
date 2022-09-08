import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ExerciseData, tempExercises } from '../../pages/ExercisePage';

interface workout {
    id: number,
    exercise: ExerciseData[],
    category: string,
    description: string,
    notes: string,
    completed: Boolean
}

interface WorkoutLog{
  id: number,
  user: string,
  workout: workout ,
  notes: string,
  completed: Boolean,
  date: Date
}

interface WorkoutPlanDto {
   id: number;
   user: string;
   goal: string;
   splits: string;
   startDate:Date;
   endDate: Date;
   workoutList: workout[];
}

function sendData(workout: any, notes: any, completed: any){
  console.log("sendData invoked");
  return {
    

    "id": 1,
    "user": "testuser",
    "workout": workout,
    "notes": notes,
    "completed": completed,
    "date": Date
  }
}


function getData(){
  // Api call using axios (get call)
  // resolve promise by converting body to json
  // fetch(url) endpoint = log, plan
  // handle promise .then
  console.log("getData invoked");

  return{
    "id": 1,
    "exercise": mapData(tempExercises),
    "category": "",
    "description": "",
    "notes": "",
    "completed": false

  }
}



function mapData(data: any): Array<ExerciseData>{
    return data.map(({id, name, exercise_base, description, category, muscles, muscles_secondary, equipment, variations}: any) => {
        return {
            "id": id,
            "name": name,
            "exercise_base": exercise_base,
            "description": description,
            "category": category,
            "muscles": muscles,
            "muscles_secondary": muscles_secondary,
            "equipment": equipment,
            "variations": variations
        }
    })
}


export default function DayView(props: any) {
  function pageLoad(){getData();}
  useEffect(pageLoad, [])
  const [show, setShow] = useState(false);
  const [workout, setWorkout] = useState({
   exercise : mapData(tempExercises),
    notes: "",
    completed: false
  });

  const [log, setLog] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveAndClose = () => {setShow(false); setWorkout(workout); sendData("", "", "");}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.day}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="checkbox" id="completed" name="completed" checked={completed} onChange={(e) => setCompleted(!completed)}></input>
            <label htmlFor='completed'> &nbsp; Completed</label>

            <br/>
            <br/>
            <br/>

            {workout.exercise.map(e => {
                return (<p>{e.name}</p>)
            })}

            <p><b>Log Day: </b></p>

            <textarea value={log} onChange={(e) => {setLog(e.target.value)}}/>
            {workout.notes}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveAndClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}