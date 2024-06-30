import React from "react";
import Book2 from "./Assets/Book2.png";

export default function AllCollection() {
  return (
    <div className="container">
      <h1 className=" text-center font-bold text-4xl text-black ">
        {" "}
        All Collection{" "}
      </h1>
      <h2 className="text-left ml-5 mt-15 font-bold text-2xl text-black">
        Trending Books
      </h2>
      <div className="">
        <img className="w-70 h-90" src={Book2} alt="" />
      </div>
    </div>
  );
}
