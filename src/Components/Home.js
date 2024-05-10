import React from "react";
import Cover from "./Assets/Cover.jpg";
import Book from "./Assets/Book.png";
export default function Home() {
  return (
    <div
      className="Section h-96 bg-cover flex"
      style={{ backgroundImage: `url(${Cover})` }}
    >
      <div>
        <h1 className="text-2xl font-bold  text-white">
          Welcome to Elite Emporium!
        </h1>
        <p className="text-sm text-white ">
          We're your go-to spot for books online.
        </p>
        <p className="text-sm text-white ">
          Find all kinds of great reads, from old favorites to new discoveries.
        </p>
        <p className="text-sm text-white ">
          Start your reading adventure with us now!
        </p>
        <button className="text-white box-border text-lg border-spacing-1 bg-yellow-500 rounded-lg p-2 w-56 hover:bg-yellow-400 ">
          Order Now <i className="bx bx-cart text-white text-lg font-bold " />
        </button>
      </div>
      <div>
        <img className="h-45 w-72" src={Book} alt="" />
      </div>
    </div>
  );
}
