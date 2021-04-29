import React from "react";
import "./Specalized.css";

import spelizeImg from "../../../images/specalized2.png";

const Specalize = () => {
  const specalized = [
    {
      id: 1,
      service: "Primary Health Care",
      descripTion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat mollitia, laborum harum tempora maxime veniam dignissimos voluptatum nam totam.",
    },
    {
      id: 2,
      service: "Heart Treatment  ",
      descripTion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat mollitia, laborum harum tempora maxime veniam dignissimos voluptatum nam totam.",
    },
    {
      id: 3,
      service: "Pregnency Treatment ",
      descripTion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat mollitia, laborum harum tempora maxime veniam dignissimos voluptatum nam totam.",
    },
    {
      id: 4,
      service: "Neurology ",
      descripTion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat mollitia, laborum harum tempora maxime veniam dignissimos voluptatum nam totam.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h2 className="d-inline-block ">WE </h2> &nbsp; <h2 className="d-inline-block brand-color"> SPECALIZED IN</h2>
            <div className="row mt-3">
              {specalized.map((sp) => (
                <>
                  <div className="col-md-6">
                    <div className="card shadow-sm p-3 mb-3">
                      <h4>{sp.service}</h4>
                      <p>{sp.descripTion}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <img className="specalize-img p-3" src={spelizeImg} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specalize;
