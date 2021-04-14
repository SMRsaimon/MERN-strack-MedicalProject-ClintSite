import React from "react";
import "./Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faAmbulance } from "@fortawesome/free-solid-svg-icons";
import doctors from "../../../images/doctors.png";
const Information = () => {
  return (
    <div className="col-lg-8 mt-5 order-2 order-lg-1">
      <div className="row">
        <div className="col-12">
          <h2 className="d-inline-block ">WELCOME TO </h2> &nbsp; <h2 className="d-inline-block brand-color">SAIMON MEDICAL CENTER</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit in modi repellat voluptas culpa, quos hic nemo voluptate quae
            velit tenetur labore, adipisci voluptatibus. Vero impedit commodi reiciendis! Optio error aliquid ex, omnis mollitia dolor fugit
            vitae excepturi explicabo modi quaerat atque natus culpa doloribus voluptatem quasi in ad quae!
          </p>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-md-6 mb-4 contant-left">
              <div className="card-container-services d-flex align-items-center p-3">
                <div className="iconContainer">
                  <FontAwesomeIcon className="iconServices" icon={faClock} />
                </div>
                <div>
                  <h6 className="text-uppercase text-gray">Opening Hours</h6>
                  <span className=" text-light">Monday - Friday : 9am-10pm</span>
                  <p className=" text-light">Sunday Close </p>
                  <p className=" text-light">Saturday Close </p>
                </div>
              </div>
            </div>
            <div className="col-md-6   mb-4 contant-right ">
              <div className="card-container-services d-flex align-items-center p-3">
                <div className="iconContainer">
                  <FontAwesomeIcon className="iconServices" icon={faAmbulance} />
                </div>
                <div>
                  <h6 className="text-uppercase text-gray">Emmergency Services</h6>
                  <p className=" text-light">Number: 0175777777 </p>
                  <p className=" text-light">Call Us for quick Services</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <img className="infoImg" src={doctors} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
