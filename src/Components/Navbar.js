import React from "react";
import logo from "./Assets/logo.png";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className=" h-13 w-100% bg-black flex p-3 gap-1 ">
          <img className="h-8 w-8 " src={logo} alt="" />
          <h1 className=" font-bold text-white my-1">Elite Emporium</h1>
          <ul className="flex text-white my-1 font-bold mx-50">
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
        </div>
      </nav>
    </div>
  );
}
