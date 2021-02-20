import React, { useState, useEffect }from "react"

import { getRequest } from '../utils/axios';

import Layout from "../components/layout";


/*
This is a WIP

You should be able to hit the 'http://localhost:8000/api/v1/user-config/' endpoint and get your user data
At the moment, you can visit it in your browser and get the data, but our `http://localhost:3000` server
Doesn't have the CSRF token necessary to be able to identify the user.

In order to have this work, we might need to have port 8000 serve up the bundle made by port 3000 and inject it with a csrf token
*/
const Account = ({history, location, match}) => {
  
  // state
  const [fetching, setFetching] = useState(false);
  const [userConfig, setUserConfig] = useState(null);

  // effects
  useEffect(() => {
    fetchUserConfig();
  }, []); // Run when component loads


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
        {fetching ? (
          <div>fetching user config....</div>
        ) : (
          <React.Fragment>
            {userConfig ? (
              <div>logged in as {userConfig.identity.username}</div>
            ) : (
              <div>not logged in</div>
            )}
          </React.Fragment>
        )}
      </div>
    </Layout>
  );
}

export default Account;
