import {useContext, useState} from "react"
import { AppUser, AppUserUpdateContext } from "../context/AppUserProvider";

interface CredentialsFormProps{
    type: CredentialFormType;
}

type CredentialFormType = "Login" | "Register"

export default function CredentialsForm({type}: CredentialsFormProps){
        // State
        //      the state of a component is a self contained representation of its
        //      its currently held values
        //  these are not state variable
        //      let username: string;
        //      let password: string;

        //  when state variables are properly changed in react, they trigger reconcilliation
        //  state management in function components are managed through Hooks
        //      they almost always follow the format    useNameOfHook -> useState()

        //      const [username, setUsername] = useState("")
        //      useState returns an array of two elements
        //      [stateVariable, functionToUpdateTheState]
        //      useState gets passed an argument of the initial value

        const setAppUser = useContext(AppUserUpdateContext);
        const [username, setUsername] = useState<string>("")
        const [password, setPassword] = useState<string>("")



        function submit(){
            const user: AppUser = {
                username: username,
                password: password
            }
            // TODO: call the API to log them in -> return a token
            //      lift the state of appUser back up to our App component
            // if(setAppUser) setAppUser(user);
            setAppUser!(user); // equivalent to the above
        }
        

   return <>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/> 
        <br></br>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <button onClick={submit}>{type}</button>
   </>
}