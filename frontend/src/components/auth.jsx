import React from "react";
import { useJwt } from "react-jwt";
import { withRouter } from 'react-router-dom';

// high level component, wraps most of app
// passes auth params to children components
// upon state changes, re-assesses expiration of access token

// TODO: use refresh token when auth token is expired
const Auth = ({children, match, location, history}) => {

  // clean slate
  var authState = {
    'authenticated': false,
    'accessToken': null,
    'refreshToken': null,
    'currentUser': null,
  }

  // try getting token from local storage
  const accessToken = localStorage.getItem('accessToken');
  const { decodedToken, isExpired } = useJwt(accessToken);

  if (accessToken && !isExpired){
    authState = Object.assign(authState, {
      'authenticated': true,
      'accessToken': accessToken,
      'refreshToken': localStorage.getItem('refreshToken'),
      'currentUser': JSON.parse(localStorage.getItem('currentUser')),
    });
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

