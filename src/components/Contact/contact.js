import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row ">
      <h1 className="text-center fw-bold text-uppercase my-2 ">Contact</h1>
        <div className="col-lg-12 mt-5 mx-3 text-left">
          <p className="fs-4">Author : Subia J. Ali</p>
          <p className="fs-4">Email : Abc@gmail.com</p>
        </div>
        <h1 className="text-center fw-bold text-uppercase mt-5 ">Press Kit</h1>
        <div className="col-lg-12 mt-5 mx-3 text-left">
          <p className="fs-4">Author : Subia J. Ali</p>
          <p className="fs-4">Email : Abc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
