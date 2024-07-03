import React from "react";
import Book2 from "./Assets/Book2.png";
import Book1 from "./Assets/Book1.png";
import Book from "./Assets/Book.png";

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
      <div className=" h-56   w-52 mt-5  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
        <img className=" " src={Book2} alt="" />
        <img className=" w-64  px-5" src={Book1} alt="Book1" />
        <img className=" w-64 px-5" src={Book} alt="Book" />
      </div>
    </div>
  );
}
