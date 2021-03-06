import React from "react"
import {
  Link
} from "react-router-dom";

import { authService } from "../services/auth";

import Layout from "../components/layout";


const Account = ({history, location, match, authenticated, currentUser}) => {

  return (
    <Layout title="Account">
      <div>Welcome to your account page</div>
      <div>
        <React.Fragment>
          {authenticated && currentUser ? (
            <div>
              Logged in as {currentUser.identity.username}. <span className="underline cursor-pointer" onClick={() => {
                authService.logout();
                history.push('/')
              }}>Log out</span>.
            </div>
          ) : authenticated ? (
            <div>
              {/* this happens if we have a valid jwt but haven't completed user config API request yet */}
              Fetching user info....
            </div>
          ) : (
            <div>Not logged in yet. <Link className="underline" to="/login/">Log in</Link>.</div>
          )}
        </React.Fragment>
      </div>
    </Layout>
  );
}

export default Account;
