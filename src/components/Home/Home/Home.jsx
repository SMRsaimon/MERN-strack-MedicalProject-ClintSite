import React from "react";
import AppoinmentContainer from "../../Appoinment/AppoinmentContainer";
import ContractForm from "../../ContractForm/ContractForm";
import Footer from "../../Footer/Footer";
import AllDepartMent from "../DepartMent/AllDepartMent/AllDepartMent";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import Specalize from "../Specalized/Specalize";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Main></Main>
      <AppoinmentContainer />
      <Specalize />
      <AllDepartMent />
      <ContractForm />
      <Footer />
    </div>
  );
};

export default Home;
