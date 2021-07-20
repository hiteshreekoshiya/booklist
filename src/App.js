import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Navbar from './Navbar.jsx';
import { auth } from "./firebase";
import { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser(null);
      }
    })
  }, [])
  return (
    <>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
  )
}

export default App;