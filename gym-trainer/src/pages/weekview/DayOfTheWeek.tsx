import DayView from "../../components/DayView/DayView"
import "./DayOfTheWeek.css"

function DayOfTheWeek(props: any) {
  return (
    <div className="day">
        <div className="title">
            <strong>{props.day}</strong>
        </div>
        <p>{props.time} {props.place}</p>
        <DayView day={props.day}></DayView>
    </div>
  )
}

export default DayOfTheWeek