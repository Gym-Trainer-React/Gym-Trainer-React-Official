import React, { useState } from "react";
import User from "../profiles/users/SignUpPart1";
import "./GymForm.css";
import CredentialsForm from "../CredentialsForm";
import AppUserProvider from "../../context/AppUserProvider";
import { AppUser } from "../../context/AppUserProvider";

export default function GymForm(){

    const [goal, setGoal] = useState("");
    const [splits, setSplit] = useState("");

    const handleGoalChange = (e: any) => {
        setGoal(e.target.value);
    }

    const handleSplitChange = (e: any) => {
        setSplit(e.target.value);
    }
    
    return <div id="GF-container"> 
        <form>
            <h1>Hello <span id="GF-username"> {/* user input */}</span></h1>

            <h2>Let's begin your journey with a few questions . . . </h2>

                {/* <label>What is your goal?</label> */}
                <div className="GF-div">
                    <label>"I want to work on 
                        <select data-placeholder="Choose an option" value={goal} onChange={handleGoalChange}>
                            <option disabled={true} value=""> Choose an option </option>
                            <option value="Cutting">Cutting</option>
                            <option value="Maintaining">Maintaining</option>
                            <option value="Bulking">Bulking</option>
                        </select>
                        to get my desired outcome."
                    </label>
                </div>

                {/* <label> How many times a week do you want to workout?</label> */}
                <div className="GF-div">
                    <label>"I want to workout 
                        <select value={splits} onChange={handleSplitChange}>
                            <option disabled={true} value=""> Choose an option </option>
                            <option value="THREE(3)">3 days</option>
                            <option value="FOUR(4)">4 days</option>
                            <option value="FIVE(5)">5 days</option>
                        </select>
                        a week."
                    </label>
                </div>

                <div className="GF-div-button">
                    <button id="GF-button" type="submit">Submit</button>
                    {/* Need to handle submit to Generate workout */}
                </div>
        </form>
    </div>
}

// Notes: 
/*
    - Do you want to see individual exercises or see all of them?
    - Do we want a filter function to categorize the main muscle group of each exercise?
    - How do we want the user/consumer to use this? What is the outcome of this feature?

    Pick the route we want to go in: (Form)
        - Users ( admin and customer )
            - customer
        - What is your desired outcome?
            - Bulking, maintaining, cuting (Enum)
        - User Schedule
            - Type of Split (3 - beginner, 4- intermediate, 5-advanced day split option)
    
    Then goes to the workouts that are appropriate to answered questions.

    Display after form: (photo, name, discription, link (optional), # reps, # sets)
        Workouts for split
            - workouts 

    Ex: render three days of exercises, one upper body, one lower body, and in between. 
    
*/

