import React from "react";
import logo from "./Assets/logo1.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className=" h-13 w-100% flex p-3  bg-purple-800 mx-auto justify-evenly">
          <span className="flex justify-between space-x-2">
            <img className="h-8 w-8 my-2" src={logo} alt="" />
            <h1 className=" font-bold text-white my-2 ">Elite Emporium</h1>
          </span>
          <ul className="flex text-white my-2 font-bold space-x-5 font-sans px-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <ul className="space-x-6">
            {" "}
            <a href="/">
              <i className="bx bx-user my-2 font-bold text-white text-lg"></i>
            </a>
            <a href="/">
              <i className="bx bx-cart my-2 font-bold text-white text-lg"></i>
            </a>
            <span className="space-x-2">
              <input
                className="bg-white border-black border-2 p-0 h-8 w-40 text-center rounded-lg text-sm"
                type="text"
                placeholder="Search here"
              />
              <a href="/">
                <i className="bx bx-search-alt-2 my-2 font-bold text-white text-lg"></i>
              </a>
            </span>
          </ul>
        </div>
      </nav>
    </div>
  );
}
