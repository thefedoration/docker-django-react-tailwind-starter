import React from "react";

// fetches jwt auth token for current user (or not, if logged out)
const Auth = ({children}) => {

  const authState = {
    'authenticated': false,
    'token': null,
  }

  return (
    <React.Fragment>
      {children({
        ...authState,
      })}
    </React.Fragment>
  )
};

export default Auth;

