import React from "react"
import {
  Link
} from "react-router-dom";

import Layout from "../components/layout";


const Home = ({history, location, match, authenticated}) => {

  return (
    <Layout title="Home">
      <h2>Welcome home!</h2>
      {authenticated ? (
      	<div>You are logged in and can visit your <Link to="/account/" className="underline">account page</Link>.</div>
      ) : (
      	<div>You are not logged in yet, and won't be able to access the account page.</div>
      )}
    </Layout>
  );
}

export default Home;
