import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllBooking.css";

const AllBooking = () => {
  const [bookingData, setBookingData] = useState([]);

  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/singlePersonAppoinment")
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      });
  }, [cancel]);

  const hendelDelete = (id) => {
    fetch(`http://localhost:5000/deleteAppoinment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setCancel(data);
      });
  };

  console.log(cancel);
  return (
    <div className="container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SL.</th>
            <th>Your Name </th>
            <th>Your Email </th>
            <th>Appoinment Date And Time</th>
            <th>Doctor's Name</th>
            {/* <th>Booking Data And Time</th> */}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((bd, index) => (
            <>
              <tr key={bd._id}>
                <td>{index + 1} </td>
                <td>{bd.userName}</td>
                <td>{bd.userEmail}</td>
                <td>{`${bd.date} / ${bd.time}`}</td>
                <td>{bd.doctorName}</td>
                {/* <td>@mdo</td>
                <td>@mdo</td> */}
                <td>
                  <button onClick={() => hendelDelete(bd._id)} type="button" className="btn btn-danger">
                    Cancle Appoinment
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllBooking;
