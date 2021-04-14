import React, { useContext } from "react";
import { userContext } from "../../../../App";
import "./AbailableAppoinment.css";
import { Card } from "react-bootstrap";

const AbailableAppoinment = () => {
  const bookingData = [
    {
      id: 1,
      visitingHour: "11:00 AM - 12:00 AM",
      totalSpace: 10,
    },
    {
      id: 2,
      visitingHour: "10:50 AM - 11:30 AM",
      totalSpace: 10,
    },
    {
      id: 3,
      visitingHour: "5:00 PM - 6:00 PM",
      totalSpace: 10,
    },
    {
      id: 4,
      visitingHour: "7:00 AM - 8:30 AM",
      totalSpace: 10,
    },
    {
      id: 5,
      visitingHour: "9:00 AM - 10:00 AM",
      totalSpace: 10,
    },
    {
      id: 6,
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
  ];
  const { appoinment } = useContext(userContext);
  const { doctorName, date, appointment_for } = appoinment;

  const hendelAppoinmentBooking = (time) => {
    const bookingConfirmInfo = { ...appoinment, time: time };
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className=" d-inline-block"> Doctor Name: &nbsp;&nbsp; </h1>
          <h1 className=" brand-color d-inline-block text-uppercase">{doctorName}</h1>
          <h2>
            <h2 className="d-inline-block"> Abailable appointments Of : </h2> <h4 className="brand-color d-inline-block">{date} </h4>
          </h2>
          <hr />
          <hr />
        </div>

        <div className="col-12 d-flex flex-wrap">
          {bookingData.map((x) => (
            <Card className="mb-2 booking-card-container ml-3">
              <Card.Header>Date : {date} </Card.Header>
              <p className="text-secondary text-center text-capitalize"> {appointment_for} </p>
              <Card.Body>
                <span>Time : {x.visitingHour} </span>
                <button onClick={() => hendelAppoinmentBooking(`${x.visitingHour}`)} type="button" className="btn btn-outline-primary ">
                  Book Appoinment
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AbailableAppoinment;
