import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home.jsx";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ButtonAppBar from "./Nav";
// provider
import { AuthProvider } from "./Auth/Auth";
// private route component
import PrivateRoute from "./Auth/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ButtonAppBar />
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