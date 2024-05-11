import React from "react";
import Cover from "./Assets/Cover.jpg";
import Book from "./Assets/Book.png";
export default function Home() {
  return (
    <div
      className="Section h-96 bg-cover flex shadow-lg"
      style={{ backgroundImage: `url(${Cover})` }}
    >
      <div className="p-20 text-left align-middle">
        <h1 className="text-5xl font-bold  text-white">
          Welcome to Elite Emporium!
        </h1>
        <p className="text-lg text-white my-2 text-center ">
          We're your go-to spot for books online.
        </p>
        <p className="text-lg text-white text-center ">
          Find all kinds of great reads, from old favorites to new discoveries.
        </p>
        <p className="text-lg text-white text-center ">
          Start your reading adventure with us now!
        </p>
        <button className="text-white box-border text-lg border-spacing-1 bg-yellow-500 rounded-lg  mx-48 my-2 p-2 w-56 hover:bg-yellow-400 ">
          Order Now <i className="bx bx-cart text-white text-lg font-bold " />
        </button>
      </div>
      {/* <div>
        <img className=" w-64 ml-8 p-10" src={Book} alt="Book" />
      </div> */}
    </div>
  );
}
