import React from "react";

const SingleDepartment = ({ department }) => {
  const { description, Name, img } = department;
  return (
    <div className="row">
      <div className="col-4 details-imgContainer">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="col-8 mt-5">
        <h2 classname="text-center">{Name} </h2>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleDepartment;
