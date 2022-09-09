import { useState } from "react"



export default function User(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [goal, setGoal] = useState("");
    const [bio, setBio] = useState("");
    const [gender, setGender] = useState("");
    




    return (
        <>
        <h1> New User Registration</h1>
        <form>
        <input type="text" placeholder="username" name="username"/>
        <br/>
        <input type="password" placeholder="password" name="password"/>
        <br/>
        <input type="password" placeholder="confirm password" name="confirmpassword"/>
        <br/>
        <input type="text" placeholder="first name"  name="firstname"/>
        <br/>
        <input type="text" placeholder="last name"  name="lastname"/>
      
      
        </form>

        <button type="submit" id="signup">Next</button>
        
        </>
    )

}