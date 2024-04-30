import React from "react";
import logo from "./Assets/logo1.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className=" h-13 w-100% flex p-3 gap-2 bg-purple-800 mx-auto">
          <img className="h-8 w-8 " src={logo} alt="" />
          <h1 className=" font-bold text-white my-1">Elite Emporium</h1>
          <ul className="flex text-white my-1 font-bold gap-7 mx-80 font-sans px-5">
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
          <ul className="px-5">
            {" "}
            <a href="/">
              <i className="bx bx-user my-2 font-bold text-white"></i>
            </a>
            <a href="/">
              <i className="bx bx-cart my-2 font-bold text-white"></i>
            </a>
            <button>search here</button>
            <a href="/">
              <i className="bx bx-search-alt-2 my-2 font-bold text-white"></i>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
