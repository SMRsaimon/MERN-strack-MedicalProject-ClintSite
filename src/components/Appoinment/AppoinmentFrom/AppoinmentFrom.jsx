import React, { useContext, useState } from "react";
import "./AppoinmentFrom.css";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router";
import { userContext } from "../../../App";
const AppoinmentFrom = () => {
  const { setAppoinment } = useContext(userContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAppoinment(data);
    history.push("/abailable-appoinment");
  };

  return (
    <>
      <div id="container" className="col-lg-4 order-1 order-lg-2">
        <div id="bookAppoinment">
          <h3 className="text-center text-light">Book An Appoinment</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>
              <span class="number">1</span>Your basic details
            </legend>
            <label for="name">Name*:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your Full Name"
              {...register("userName", { required: true, maxLength: 80 })}
            />

            <label for="mail">Email*:</label>
            <input
              type="email"
              id="mail"
              name="user_email"
              placeholder="Enter your Valid Email "
              {...register("userEmail", { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label for="tel">Contact Num:</label>
            <input
              type="tel"
              id="tel"
              placeholder="Enter your Contract Number"
              name="user_num"
              {...register("userMobileNumber", { required: true, maxLength: 12 })}
            />
          </fieldset>

          <fieldset>
            <legend>
              <span class="number">2</span>Appointment Details
            </legend>
            <label for="appointment_for">Appointment for*:</label>
            <select id="appointment_for" name="appointment_for" {...register("appointment_for", { required: true })}>
              <option value="Traumatology">Traumatology</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Fiadiology">Fiadiology</option>
            </select>
            <label for="name">Doctor Name*:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter Doctor's Name"
              {...register("doctorName", { required: true, maxLength: 80 })}
            />
            <label for="date">Date*:</label>
            <input type="date" name="date" placeholder="date" {...register("date", { required: true })} />
            <br />
          </fieldset>
          <button type="submit">Check Available Appointment</button>
        </form>
      </div>
    </>
  );
};

export default AppoinmentFrom;
