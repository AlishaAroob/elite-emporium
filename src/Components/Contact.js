import React from "react";
import logo1 from "./Assets/logo1.png";
export default function Contact() {
  return (
    <div className="Section3 min-h-[450px]  bg-teal-700 ">
      <h1 className="font-bold text-4xl text-center pt-8 text-white ">
        {" "}
        Contact Us
      </h1>
      <span className="flex  space-x-2 ml-20 mt-10 p-10">
        <img className=" h-28 w-40 my-1" src={logo1} alt="" />
        <h1 className="font-bold text-white my-10 text-lg">Elite Emporium</h1>
      </span>
      <div>
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-facebook-circle"></i>
        <i class="bx bxl-twitter"></i>
      </div>
    </div>
  );
}
