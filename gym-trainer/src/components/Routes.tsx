
import {Routes as DOMRoutes, Route} from "react-router-dom"
import ExercisePage from "../pages/ExercisePage"
import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import { useContext } from "react"
import { AppUserContext } from "../context/AppUserProvider"
import WorkoutLogPage from "../pages/WorkoutLogPage"

export default function Routes(){

    const appUser = useContext(AppUserContext);

    return <DOMRoutes>
    <Route path="/" element={
        <>
        { appUser && <HomePage />}
        {!appUser && <AuthPage />}
      </>
    }/>
    <Route path="/exercises" element={<ExercisePage />}/>
    <Route path="/WorkoutLog" element={<WorkoutLogPage />}/>
  </DOMRoutes>
}