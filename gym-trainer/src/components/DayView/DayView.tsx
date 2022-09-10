import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ExerciseData, tempExercises } from '../../pages/ExercisePage';
import "./DayView.css"

interface workout {
    id: number,
    exercise: ExerciseData[],
    category: string,
    description: string,
    notes: string,
    completed: Boolean
}

interface WorkoutLog{
  
  user: any,
  workout: any,
  notes: string,
  completed: Boolean,
  date: Date
}



function sendData(userId: number, workoutId: number, notes: any, completed: any) {
  axios.post<WorkoutLog>("http://gymappapi-env.eba-xyq67ruz.us-east-2.elasticbeanstalk.com/log", {
    "user": {
      "id":userId
    },
    "workout": {
      "id": workoutId
    },
    "notes" : notes,
    "completed" : completed,
    "date" : new Date()
  }).then(
    res => {
      console.log(res)
  
    }
  );

  
}


function getData() : workout{
  // Api call using axios (get call)
  // resolve promise by converting body to json
  // fetch(url) endpoint = log, plan
  // handle promise .then

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
  const [workout, setWorkout] = useState<workout>(() => getData());

  const [log, setLog] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveAndClose = () => {setShow(false); setWorkout(workout); sendData(1, 1, log, completed);}
  console.log(saveAndClose);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Day View
      </Button>

      <Modal className="Modal" show={show} onHide={handleClose}>
        <Modal.Header className="header" closeButton>
          <Modal.Title>{props.day}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body">
            <input type="checkbox" id="completed" name="completed" checked={completed} onChange={(e) => setCompleted(!completed)}></input>
            <label htmlFor='completed'> &nbsp; Completed</label>

            <br/>
            <br/>
            <br/>

            {workout.exercise.map(e => {
                return (<p key={e.id}>{e.name}</p>)
            })}

            <p><b>Log Day: </b></p>

            <textarea value={log} onChange={(e) => {setLog(e.target.value)}}/>
            {workout.notes}

        </Modal.Body>
        <Modal.Footer className="footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="primary" onClick={saveAndClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}