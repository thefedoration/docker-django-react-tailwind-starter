import React from "react"

import Layout from "../components/layout";


const About = ({history, location, match}) => {

  return (
    <Layout title="About">
      This is a starter project for a web app.<br/>
      You can read a bit about
      it <a className="underline" href="https://github.com/thefedoration/docker-django-react-tailwind-starter" target="_blank">here</a>.
    </Layout>
  );
}

export default About;
