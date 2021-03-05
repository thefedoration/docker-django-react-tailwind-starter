import React, { useState, useEffect } from "react"
import {
  Link
} from "react-router-dom";

import { getRequest } from '../utils/axios';

import Layout from "../components/layout";


/*
This is a WIP

You should be able to hit the 'http://localhost:8000/api/v1/user-config/' endpoint and get your user data
At the moment, you can visit it in your browser and get the data, but our `http://localhost:3000` server
Doesn't have the CSRF token necessary to be able to identify the user.

In order to have this work, we might need to have port 8000 serve up the bundle made by port 3000 and inject it with a csrf token
*/
const Account = ({history, location, match, authenticated}) => {
  
  // state
  const [fetching, setFetching] = useState(false);
  const [userConfig, setUserConfig] = useState(null);

  console.log("account page", authenticated)

  // effects
  useEffect(() => {
    if (authenticated) fetchUserConfig();
  }, []); // Run when component loads. fetch config if we're authenticated


  // actions
  const fetchUserConfig = () => {
    setFetching(true);
    setUserConfig(null);
    getRequest('/api/v1/user-config/',
      (response) => {
        setUserConfig(response.data);
        setFetching(false);
      }, (error) => {
        setFetching(false);
      });
  }


  return (
    <Layout title="Account">
      <div>Welcome to your account page</div>
      <div>
        <React.Fragment>
          {userConfig ? (
            <div>Logged in as {userConfig.identity.username}</div>
          ) : authenticated && fetching ? (
            <div>Fetching user config....</div>
          ) : (
            <div>Not logged in yet. <Link className="underline" to="/login/">Log in</Link>.</div>
          )}
        </React.Fragment>
      </div>
    </Layout>
  );
}

export default Account;
