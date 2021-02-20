import React, { useState, useEffect }from "react"

import { getRequest } from '../utils/axios';

import Layout from "../components/layout";


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
