import React from 'react'
import logo1 from "./Assets/logo1.png";
import PNG from "./Assets/Minimal Elegant Circle Badge Creative Studio Brand Logo (2).png";

const Contact = () => {
  return (
    <div className="Section3 min-h-[450px]  bg-teal-700 ">
      <h1 className="font-bold text-4xl text-center pt-8 text-white ">
        {" "}
        Contact Us
      </h1>
      <div className="grid grid-cols-3 ">
        <div className=" space-x-2 text-center ">
          <h1 className="font-bold text-white my-10 text-lg">
            <img className=" ml-36 h-28 w-40 text-center " src={logo1} alt="" />
            Elite Emporium
          </h1>
          <div className="text-xl font-bold text-white space-x-4 ">
            <p className=" ml-4 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500">
              Follow us
            </p>
            <br></br>
            <i className="bx bxl-instagram cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"></i>
            <i className="bx bxl-facebook-circle cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"></i>
            <i className="bx bxl-twitter cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"></i>
          </div>
        </div>
        <div className="flex flex-col text-white  text-center mt-24 space-y-2 font-bold ">
          <a
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
            href="/"
          >
            About
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            Support
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            FAQS
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            Become an Affiliate
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            Gift Cards
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            Return and Refund Policy
          </a>
          <a
            href="/"
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-yellow-500"
          >
            Contact
          </a>
        </div>
        <div>
          <img className=" h-80 w-80 text-center" src={PNG} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact;


