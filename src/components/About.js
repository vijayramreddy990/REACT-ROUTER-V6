import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <h1>About Page</h1>
      <p>This is the About page of our awsome app</p>
      <p>Here we are learning about react router 6</p>
      <Link to="/">Go to Home Page</Link>
      <li>
        <Link to="/user/anil">Anil</Link>
      </li>
      <li>
        <Link to="/user/peter">Peter</Link>
      </li>
    </div>
  );
};

export default About;
