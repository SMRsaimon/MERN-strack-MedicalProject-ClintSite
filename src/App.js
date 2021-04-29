
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
import AllBooking from './components/Appoinment/AppoinmentFrom/AbailableAppoinment/AllBooking/AllBooking';
import ContractForm from './components/ContractForm/ContractForm';
import Footer from './components/Footer/Footer';


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
            <Footer />
          </Route>
          <Route path='/Appoinment'>
            <Navigation />
            <AllBooking />
            <Footer />
          </Route>
          <Route path='/contract'>
            <Navigation />
            <ContractForm />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
