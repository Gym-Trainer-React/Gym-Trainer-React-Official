import { Link } from "react-router-dom"
import "./Navbar.css"
import { useContext } from "react"
import { AppUser, AppUserContext } from "../../context/AppUserProvider";

export default function Navbar(){

    //  AppUserContext acts as a wrapper for the contained state value set in the provider
    const appUser = useContext(AppUserContext);

    // const navigate = useNavigate();   -> navigate allows us to replace the URL
   return <ul className="navbar">
        <>
            {appUser && <AuthNavbarElements appUser={appUser} />}
            {!appUser && <NoAuthNavbarElements/>}
        </>
    </ul>
}

interface AuthNavbarElementProps{
    appUser: AppUser
}

function AuthNavbarElements({appUser}: AuthNavbarElementProps){
    return <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
        <li>User Profile</li>
        <li className="element right">Hello, {appUser?.username}</li>
    </>
}

function NoAuthNavbarElements(){
    return <>
        <li className="element">Gym App</li>
    </>
}