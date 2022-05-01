import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This is the home page of our awsome app</p>
      <p>Here we are learning about react router 6</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
