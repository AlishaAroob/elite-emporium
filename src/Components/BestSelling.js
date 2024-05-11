import React from "react";
import Book from "./Assets/Book.png";
import Book1 from "./Assets/Book1.png";
export default function BestSelling() {
  return (
    <div className="Section1 h-96 w-full font-bold">
      <h1 className="text-4xl text-center my-2 font"> Best Selling</h1>
      <div>
        <img className=" w-64 ml-8 p-10" src={Book} alt="Book" />
      </div>
      <div>
        <img className=" w-64 ml-8 p-10" src={Book1} alt="Book1" />
      </div>
    </div>
  );
}
