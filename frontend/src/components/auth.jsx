import React from "react";

// fetches jwt auth token for current user (or not, if logged out)
const Auth = ({children}) => {

  // TODO: check if token is valid? could be expired
  const authState = {
    'authenticated': localStorage.getItem('accessToken') ? true : false,
    'token': localStorage.getItem('accessToken'),
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

