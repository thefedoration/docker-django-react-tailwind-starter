import React, { useState } from "react";
import { useJwt } from "react-jwt";
import { withRouter } from 'react-router-dom';

import { authService } from "../services/auth";

// high level component, wraps most of app
// passes auth params to children components
// upon state changes, re-assesses expiration of access token
const Auth = ({children, match, location, history}) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  
  // clean slate
  var authState = {
    'authenticated': false,
    'accessToken': null,
    'refreshToken': null,
    'currentUser': null,
  }

  // try getting token from local storage, update state if it's valid
  const { isExpired } = useJwt(localStorage.getItem('accessToken'));

  // set state if we have a valid token
  if (accessToken && !isExpired){
    authState = Object.assign(authState, {
      'authenticated': true,
      'accessToken': localStorage.getItem('accessToken'),
      'refreshToken': localStorage.getItem('refreshToken'),
      'currentUser': JSON.parse(localStorage.getItem('currentUser')),
    })
  }

  return (
    <React.Fragment>
      {children({
        ...authState,
      })}
    </React.Fragment>
  )
};

export default withRouter(Auth);

