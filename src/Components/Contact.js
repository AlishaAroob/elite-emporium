import React from "react";
import logo1 from "./Assets/logo1.png";
export default function Contact() {
  return (
    <div className="Section3 min-h-[450px]  bg-teal-700 ">
      <h1 className="font-bold text-4xl text-center pt-8 text-white ">
        {" "}
        Contact Us
      </h1>
      <div className="grid grid-cols-3">
        <div className=" space-x-2 ml-20 mt-10 p-10 ">
          <h1 className="font-bold text-white my-10 text-lg">
            <img className=" h-28 w-40 my-1" src={logo1} alt="" />
            Elite Emporium
          </h1>
        </div>
        <div className="text-2xl font-bold text-white ml-24 space-x-4 pl-16 ">
          <p className=" ml-4 ">Follow us</p>
          <br></br>
          <i className="bx bxl-instagram "></i>
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-twitter"></i>
        </div>
      </div>
    </div>
  );
}
