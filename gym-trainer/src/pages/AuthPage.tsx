import CredentialsForm from "../components/CredentialsForm";
import "./AuthPage.css"


export default function AuthPage(){
    return <div className="centered">
            <CredentialsForm type="Login"/>
        </div>
}