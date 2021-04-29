import React, { useContext, useState } from "react";
import { userContext } from "../../../../App";
import "./AbailableAppoinment.css";
import { Card } from "react-bootstrap";
import AllBooking from "./AllBooking/AllBooking";

const AbailableAppoinment = () => {
  const bookingData = [
    {
      id: 1,
      visitingHour: "11:00 AM - 12:00 AM",
      totalSpace: 1,
    },
    {
      id: 2,
      visitingHour: "10:50 AM - 11:30 AM",
      totalSpace: 9,
    },
    {
      id: 3,
      visitingHour: "5:00 PM - 6:00 PM",
      totalSpace: 2,
    },
    {
      id: 4,
      visitingHour: "7:00 AM - 8:30 AM",
      totalSpace: 5,
    },
    {
      id: 5,
      visitingHour: "9:00 AM - 10:00 AM",
      totalSpace: 6,
    },
    {
      id: 6,
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 4,
    },
  ];
  const { appoinment } = useContext(userContext);
  const { doctorName, date, appointment_for } = appoinment;

  const [successBooking, setSuccessBooking] = useState(false);

  const hendelAppoinmentBooking = (time) => {
    console.log("Button Click ed");
    const bookingConfirmInfo = { ...appoinment, time: time };

    fetch("http://localhost:5000/appoinment", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingConfirmInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccessBooking(data);
        console.log(data);
      });
  };

  return (
    <>
      {successBooking ? (
        <>
          <AllBooking></AllBooking>
        </>
      ) : (
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className=" d-inline-block"> Doctor's Name: &nbsp;&nbsp; </h1>
              <h1 className=" text-gray d-inline-block text-uppercase">{doctorName}</h1>
              <h2>
                <h2 className="d-inline-block brand-color"> Abailable appointments Of : {date} </h2>
              </h2>
              <hr />
              <hr />
            </div>

            <div className="col-12 d-flex flex-wrap">
              {bookingData.map((x) => (
                <Card className="mb-2 booking-card-container ml-3">
                  <Card.Header> {x.visitingHour}</Card.Header>
                  <p className="text-secondary text-center text-capitalize"> {appointment_for} </p>
                  <Card.Body>
                    <span style={{ fontSize: "14px", text: "center" }}>Available : {x.totalSpace} &nbsp; Space</span>
                    <button onClick={() => hendelAppoinmentBooking(`${x.visitingHour}`)} type="button" className="btn btn-outline-primary ">
                      Book Appoinment
                    </button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AbailableAppoinment;
