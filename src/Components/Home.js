import React from "react";
import Cover from "./Assets/Cover.jpg";
export default function Home() {
  return (
    <div className="Section h-96">
      <img className="h-96 bg-opacity-50 w-screen bg" src={Cover} alt="" />
      <div className="grid grid-cols-2 ">
        <h1 className="font-bold text-white text-left text-xl  ">
          Welcome to Elite Emporium
        </h1>
        <p></p>
      </div>
    </div>
  );
}
