
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Navigation from './components/Home/Navigation/Navigation';
import AbailableAppoinment from './components/Appoinment/AppoinmentFrom/AbailableAppoinment/AbailableAppoinment';
import { createContext, useState } from 'react';


export const userContext = createContext();
function App() {

  const [user, setUser] = useState({})

  const [appoinment, setAppoinment] = useState({})



  return (
    <userContext.Provider value={{ user, setUser, appoinment, setAppoinment }} >

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/abailable-appoinment'>
            <Navigation />
            <AbailableAppoinment></AbailableAppoinment>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
