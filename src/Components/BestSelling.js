import React from "react";
import Book from "./Assets/Book.png";
import Book1 from "./Assets/Book1.png";
import Book2 from "./Assets/Book2.png";
import Book3 from "./Assets/Book3.png";
import Book4 from "./Assets/Book4.png";

export default function BestSelling() {
  return (
    <div className="Section1 max-h-max w-full font-bold  bg-teal-700 shadow-lg ">
      <h1 className="text-4xl text-white text-center py-5 font">
        {" "}
        Best Sellers
      </h1>
      <div className="Grid grid-rows-5 bg-black  justify-around">
        <div className="flex  mt-5 justify-around ">
          <div>
            <img className=" w-64 px-5" src={Book} alt="Book" />
            <button className="text-white mx-4 box-border  text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div>
            <img className=" w-64  px-5" src={Book1} alt="Book1" />
            <button className="text-white mx-4  box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div>
            <img className=" w-64 px-5" src={Book2} alt="Book2" />
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div>
            <img className=" w-64 px-5" src={Book3} alt="Book3" />
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div>
            <img className=" w-64 px-5" src={Book4} alt="Book4" />
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-56 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
