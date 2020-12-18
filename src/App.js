import React, { createContext, useState } from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        PrivateRoute
  } from "react-router-dom";
import AddDoctor from './Components/AddDoctor/AddDoctor';
import AllPatients from './Components/AllPatients/AllPatients';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
        <Router>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path = "/dashboard">
              <Dashboard></Dashboard>
            </Route>

            {/* <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
            </PrivateRoute> */}

            <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>

            <Route path = "/allPatients">
                <AllPatients></AllPatients>
            </Route>
            
            <Route path = "/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>

    
  );
}

export default App;