
import React, { useEffect, useState } from "react";
import GymForm from "./components/Form/GymForm";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";
import StickyFooter from "./components/StickyFooter";
import AppUserProvider from "./context/AppUserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

// React Context API -> allows to define a context that is visible throughout our app
//    Essentially CONTEXT is GLOBAL STATE
//      1. Establish a Context
//      2. Wrap your components within the Context.Provider component
//      3. Pass the value of the state variable as a property to the Provider

function App() {


  return <div className="App"> 
          <Navbar />
          <Routes />
          <StickyFooter/>
  </div>


}



export default App;
