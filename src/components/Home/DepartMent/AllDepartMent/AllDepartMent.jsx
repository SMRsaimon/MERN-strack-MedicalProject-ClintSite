import React, { useState } from "react";
import "./AllDepartMent.css";
import Gastroenterology from "../../../../images/Gastroenterology.png";
import Cardiology from "../../../../images/Cardiology.png";
import Pulamonalpry from "../../../../images/Pulamonalpry .png";
import Ophthakmology from "../../../../images/Ophthakmology.png";
import SingleDepartment from "./SingleDepartment/SingleDepartment";

const AllDepartMent = () => {
  const department = [
    {
      id: 1,
      img: Gastroenterology,
      Name: "Gastroenterology",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique impedit magnam harum? Voluptas perspiciatis officia rem laborum deleniti quod",
    },
    {
      id: 2,
      img: Cardiology,
      Name: "Cardiology",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique impedit magnam harum? Voluptas perspiciatis officia rem laborum deleniti quod",
    },
    {
      id: 3,
      img: Pulamonalpry,
      Name: "Pulamonalpry",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique impedit magnam harum? Voluptas perspiciatis officia rem laborum deleniti quod",
    },
    {
      id: 4,
      img: Ophthakmology,
      Name: "Ophthakmology",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique impedit magnam harum? Voluptas perspiciatis officia rem laborum deleniti quod",
    },
  ];

  const [departMent, setDepartment] = useState({
    id: 1,
    img: Gastroenterology,
    Name: "Gastroenterology",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate similique impedit magnam harum? Voluptas perspiciatis officia rem laborum deleniti quod",
  });

  const hendelDepartMent = (id) => {
    const targetData = department.find((x) => x.id === id);

    setDepartment(targetData);
  };

  console.log(departMent);

  return (
    <div className="container-fluid pb-5 pt-5 background-color-gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">
              <h2 className=" d-inline-block ">OUR</h2> &nbsp; <h2 className="d-inline-block brand-color"> DEPARTMENT</h2>
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, libero. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>

          <div className="col-12 d-flex justify-content-center pt-5">
            <div className="img-button-container d-flex ">
              {department.map((x) => (
                <>
                  <div onClick={() => hendelDepartMent(x.id)} key={x.id} className="single-img-wrapper ">
                    <div>
                      <img classname="ml-auto" src={x.img} alt="" srcset="" />
                      <p>{x.Name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="col-12 mt-5">
            <SingleDepartment department={departMent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDepartMent;
