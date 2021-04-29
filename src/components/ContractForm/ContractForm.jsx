import React from "react";
import "./ContractForm.css";

const ContractForm = () => {
  return (
    <div class="background">
      <h4 className="text-danger ml-5 pt-5 getInTouch">Get In Touch</h4>

      <h1 className="text-light text-center pt-3">Contract US</h1>

      <div class="screen-body-item container d-flex justify-content-center">
        <form class="app-form col-md-6">
          <div class="app-form-group">
            <input type="text" name="name" class="app-form-control" placeholder="NAME" required />
          </div>
          <div class="app-form-group">
            <input type="email" name="email" class="app-form-control" placeholder="EMAIL" required />
          </div>
          <div class="app-form-group">
            <input type="text" name="number" class="app-form-control" placeholder="CONTACT NO" required />
          </div>
          <div class="app-form-group message">
            <textarea type="text" name="message" class="app-form-control" placeholder="MESSAGE" required />
          </div>
          <div class="app-form-group buttons pb-5">
            <button type="submit" class="app-form-button">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;
