import React from "react";
import AppoinmentContainer from "../../Appoinment/AppoinmentContainer";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Main></Main>
      <AppoinmentContainer />
    </div>
  );
};

export default Home;
