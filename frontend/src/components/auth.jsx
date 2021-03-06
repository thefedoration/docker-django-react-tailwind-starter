import React, { useState } from "react";
import { useJwt } from "react-jwt";
import { withRouter } from 'react-router-dom';

import { authService } from "../services/auth";
// import Layout from "../components/layout";

// high level component, wraps most of app
// passes auth params to children components
// upon state changes, re-assesses expiration of access token
const Auth = ({children, match, location, history}) => {
  // const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  // const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  // const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

  // clean slate
  var authState = {
    'authenticated': false,
    'accessToken': null,
    'refreshToken': null,
    'currentUser': null,
  }

  // try getting token from local storage, update state if it's valid
  const { decodedToken, isExpired } = useJwt(localStorage.getItem('accessToken'));

  // set state if we have a valid token
  if (accessToken && !isExpired){
    authState = Object.assign(authState, {
      'authenticated': true,
      'accessToken': localStorage.getItem('accessToken'),
      'refreshToken': localStorage.getItem('refreshToken'),
      'currentUser': JSON.parse(localStorage.getItem('currentUser')),
    })
  }

  // if auth token expired but we have a refresh, go refresh the access token
  if (isExpired && localStorage.getItem('refreshToken') && !localStorage.getItem('refreshingAccessToken')){
    authService.refresh((response) => {
      // token succesfully refreshed. go ahead and set the state
      // this will re-render this component and we won't be seeing the blank screen anymore
      setAccessToken(localStorage.getItem('accessToken'))
    });
    // while refreshing, we'll show a blank screen
    // return <Layout />
    return ''
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

