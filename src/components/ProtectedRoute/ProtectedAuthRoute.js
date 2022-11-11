import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedAuthRoute = (props) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Redirect to="/" /> : props.children
      }
    </Route>
  );
};

export default ProtectedAuthRoute;