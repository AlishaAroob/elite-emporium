import React from "react";
import Cover from "./Assets/Cover.jpg";
export default function Home() {
  return (
    <div className="Section h-96">
      <div className="">
        <h1 className="text-black text-2xl font-bold">
          Welcome to Elite Emporium
        </h1>
        <img className="h-96  w-screen " src={Cover} alt="" />
      </div>
    </div>
  );
}
