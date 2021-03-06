import React from "react";

import {
  Route,
  Redirect,
} from "react-router-dom";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

// Route component that takes properties
// TODO: handle authRequired param
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {

      // if not authenticated, and route has authRequired, redirect user to login
      if (rest.authRequired && !rest.authenticated){
        return <Redirect to="/login/" />
      } else {
        return renderMergedProps(component, routeProps, rest);
      }
    }}/>
  );
}

export default PropsRoute;