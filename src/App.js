import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Switch,BrowserRouter as Router } from "react-router-dom";
import Home from "./Home.jsx";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { auth } from "./firebase";
import { useState, useEffect } from 'react';
import ButtonAppBar from "./Nav";



// provider
import { AuthProvider } from "./Auth/Auth";

// private route component
import PrivateRoute from "./Auth/PrivateRoute";

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
    <AuthProvider>
      <Router>
      <ButtonAppBar user={user} />
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
      </Switch>
      </Router>
   </AuthProvider>
  )
}

export default App;