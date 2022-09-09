
import React, { useEffect, useState } from "react";
import GymForm from "./components/Form/GymForm";

import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";
import AppUserProvider from "./context/AppUserProvider";

// React Context API -> allows to define a context that is visible throughout our app
//    Essentially CONTEXT is GLOBAL STATE
//      1. Establish a Context
//      2. Wrap your components within the Context.Provider component
//      3. Pass the value of the state variable as a property to the Provider
//      4. In a component that needs access to the state of the context, use the useContext(ProviderName) hook

function App() {
  return <> 
          <Navbar />
          <Routes />
  </>
}



export default App;
