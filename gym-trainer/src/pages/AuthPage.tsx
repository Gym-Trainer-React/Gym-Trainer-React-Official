import CredentialsForm from "../components/CredentialsForm";
import DayView from "../components/DayView/DayView";
import "./AuthPage.css"


export default function AuthPage(){
    return <div className="centered">
            <CredentialsForm type="Login"/>
            <DayView day="Monday"/>
        </div>
}