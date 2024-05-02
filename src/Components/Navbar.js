import React from "react";
import logo from "./Assets/logo1.png";
export default function Navbar() {
  return (
    <div>
      <nav className="sticky">
        <div className=" h-13 w-100% flex p-3  bg-purple-800 mx-auto justify-evenly">
          <span className="flex justify-between space-x-2">
            <img className="h-9 w-9 my-1" src={logo} alt="" />
            <h1 className=" font-bold text-white my-2 ">Elite Emporium</h1>
          </span>
          <i className="bx bx-menu my-2 font-bold text-white text-lg hidden hover:text-yellow-500 hover:text-lg "></i>
          <ul className="flex text-white my-2 font-bold space-x-5 font-sans px-5">
            <li>
              <a href="/" className="hover:text-yellow-500 hover:text-sm ">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-500 hover:text-sm ">
                Shop<i className="bx bx-caret-down" onClick={ToggleEvent}></i>
                <span className="hidden">
                  {" "}
                  <li>Best Sellers</li>
                  <li>Trending books</li>
                  <li>Popular books</li>
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-500 hover:text-sm ">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-500 hover:text-sm ">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="space-x-6">
            {" "}
            <a href="/">
              <i className="bx bx-user my-2 font-bold text-white text-lg hover:text-yellow-500 hover:text-sm "></i>
            </a>
            <a href="/">
              <i className="bx bx-cart my-2 font-bold text-white text-lg  hover:text-yellow-500 hover:text-sm"></i>
            </a>
            <span className="space-x-2">
              <input
                className="bg-white border-black border-2 p-0 h-8 w-40 text-center rounded-lg text-sm"
                type="text"
                placeholder="Search here"
              />
              <a href="/">
                <i className="bx bx-search-alt-2 my-2 font-bold text-white text-lg  hover:text-yellow-500 hover:text-sm "></i>
              </a>
            </span>
          </ul>
        </div>
      </nav>
    </div>
  );
}
