import React from "react";
import Cover from "./Assets/Cover.jpg";
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
        <button className="text-white box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg  mx-48 my-4 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
          Order Now{" "}
          <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
        </button>
      </div>
    </div>
  );
}
