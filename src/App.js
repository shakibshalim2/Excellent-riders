import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Destination from './Component/Destination/Destination';
import Login from './Component/Login/Login';
import VehicleDetail from './Component/VehicleDetail/VehicleDetail';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p className='userStyle'>User: {loggedInUser.name}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/vehicle/:vehicleid">
            <VehicleDetail></VehicleDetail>
          </PrivateRoute>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
