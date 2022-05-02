import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navToPage = (route) => {
    navigate(route);
  };
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This is the home page of our awsome app</p>
      <p>Here we are learning about react router 6</p>
      <Link to="/about">Go to About Page</Link>
      <br />
      <button onClick={() => navToPage("/about")}>Go to About Page</button>
      <br />
      <button onClick={() => navToPage("/filter")}>Go to Filter Page</button>
    </div>
  );
};

export default Home;
