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
      <div className=" h-56   w-52  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
        <img className="w-70 h-50 " src={Book2} alt="" />
      </div>
    </div>
  );
}
