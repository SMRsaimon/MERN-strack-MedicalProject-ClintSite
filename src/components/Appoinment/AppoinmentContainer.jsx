import React from "react";
import "./AppoinmentContainer.css";
import AppoinmentFrom from "./AppoinmentFrom/AppoinmentFrom";
import Information from "./Information/Information";

const AppoinmentContainer = () => {
  return (
    <div className="container ">
      <div className="row">
        <Information />
        <AppoinmentFrom />
      </div>
    </div>
  );
};

export default AppoinmentContainer;
