import React from "react";
import "./Main.css";
import backgroundImg from "../../../images/background.jpg";

const Main = () => {
  return (
    <div className="row home-contant">
      <div className="col-12 home-background-img-container">
        <img src={backgroundImg} alt="" srcset="" />
      </div>
      <div className="home-taitle">
        <div>
          <h2 className="text-uppercase d-inline-block text-light">24 Hours </h2>
          &nbsp; &nbsp;
          <h2 className="text-uppercase d-inline-block">Medical Services </h2>
          <h2 className="text-uppercase text-light">Emmergency Case </h2>
          <button className="btn btn-dark">Check Services</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
