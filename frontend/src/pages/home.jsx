import React from "react"
// import {
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import Layout from "../components/layout";


const Home = ({history, location, match}) => {

  return (
    <Layout title="Home">
      welcome home!
    </Layout>
  );
}

export default Home;
