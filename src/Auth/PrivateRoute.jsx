// react
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// context
import { AuthContext } from "./Auth.jsx";

// authenticated routes
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default PrivateRoute;