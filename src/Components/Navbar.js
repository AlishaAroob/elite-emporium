import React, { useState } from "react";
import logo from "./Assets/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
  };
  return (
    <div>
      <nav className="sticky">
        <div className="h-13 w-full flex p-3 mx-auto justify-evenly bg-teal-700 shadow-lg">
          <span className="flex justify-between space-x-2">
            <img className="h-9 w-9 my-1" src={logo} alt="" />
            <h1 className="font-bold text-white my-2">Elite Emporium</h1>
          </span>
          <i className="bx bx-menu my-2 font-bold text-white text-lg hidden hover:text-yellow-500 hover:text-lg "></i>
          <ul className="flex text-white my-2 font-bold space-x-5 font-sans px-5">
            <li>
              <a href="/" className="hover:text-yellow-500 hover:text-sm  ">
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-yellow-500 hover:text-sm "
                onMouseEnter={toggleMenu}
              >
                Shop{" "}
                {isOpen ? (
                  <i className={"bx bx-caret-up"}></i>
                ) : (
                  <i className={"bx bx-caret-down"}></i>
                )}
              </a>
              {isOpen && (
                <div className="flex flex-col space-y-1 my-2">
                  <a href="/" className="hover:text-yellow-500 ">
                    All collection
                  </a>
                  <a href="/" className="hover:text-yellow-500 ">
                    Best sellers
                  </a>
                  <a href="/" className="hover:text-yellow-500 ">
                    Trending books
                  </a>
                </div>
              )}
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
          <ul className="space-x-6 flex ">
            <a href="/">
              <i
                className="bx bx-user my-2 font-bold text-white text-xl hover:text-yellow-500 hover:text-lg "
                onMouseOver={toggleUser}
              ></i>

              {isUserOpen && (
                <div className="flex flex-col space-y-1 my-2">
                  <a
                    href="/"
                    className="hover:text-yellow-500  text-white font-bold space-x-2 "
                  >
                    Log In
                    <i className="bx bx-log-in-circle space-x-2 mx-2 my-2"></i>
                  </a>
                  <a
                    href="/"
                    className="hover:text-yellow-500 text-white font-bold"
                  >
                    Sign up
                  </a>
                </div>
              )}
            </a>
            <a href="/">
              <i className="bx bx-cart my-2 font-bold text-white text-xl hover:text-yellow-500 hover:text-lg"></i>
            </a>
            <span className="space-x-2">
              <input
                className="bg-white border-black border-2 p-0 h-8 w-40 text-center rounded-lg text-sm"
                type="text"
                placeholder="Search here"
              />
              <a href="/">
                <i className="bx bx-search-alt-2 my-2 font-bold text-white text-lg hover:text-yellow-500 hover:text-sm "></i>
              </a>
            </span>
          </ul>
        </div>
      </nav>
    </div>
  );
}
