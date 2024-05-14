import React from "react";
import Book from "./Assets/Book.png";
import Book1 from "./Assets/Book1.png";
import Book2 from "./Assets/Book2.png";
import Book3 from "./Assets/Book3.png";
import Book4 from "./Assets/Book4.png";

export default function BestSelling() {
  return (
    <div className="Section1 max-h-max w-full font-bold  ">
      <h1 className="text-4xl text-black text-center py-5 font">
        {" "}
        Best Sellers
      </h1>
      <div className="Grid grid-rows-5  justify-between">
        <div className="flex  mt-5 justify-around ">
          <div className=" h-56   w-52  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img className=" w-64 px-5" src={Book} alt="Book" />
            <h1 className="text-sm mx-4 "> Soul </h1>
            <p className="text-sm mx-4">OLIVIA WILSON</p>
            <p className="text-sm mx-4">$29</p>
            <button className="text-white mx-4 box-border  text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-44 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div className=" h-56   w-52  cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img className=" w-64  px-5" src={Book1} alt="Book1" />
            <h1 className="text-sm mx-4 ">Thread </h1>
            <p className="text-sm mx-4">OLIVIA WILSON</p>
            <p className="text-sm mx-4">$35</p>
            <button className="text-white mx-4  box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-44 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div className=" h-56   w-52 cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img className=" w-64 px-5" src={Book2} alt="Book2" />
            <h1 className="text-sm mx-4 ">The Young Wizard</h1>
            <p className="text-sm mx-4">AARON LOEB</p>
            <p className="text-sm mx-4">$40</p>
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-44 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div className=" h-56   w-52 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img className=" w-64 px-5" src={Book3} alt="Book3" />
            <h1 className="text-sm mx-4 ">Walk into the shadow</h1>
            <p className="text-sm mx-4">ESTELLE DARCY</p>
            <p className="text-sm mx-4">$45</p>
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-44 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
          <div className=" h-56   w-52 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img className=" w-64 px-5" src={Book4} alt="Book4" />
            <h1 className="text-sm mx-4 ">Spear</h1>
            <p className="text-sm mx-4">NEIL TRAN</p>
            <p className="text-sm mx-4">$25</p>
            <button className="text-white mx-4 box-border text-lg border-spacing-1 transition ease-in-out delay-150 bg-yellow-500 rounded-lg   my-3 p-2 w-44 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
              Add to cart
              <i className=" mx-2 bx bx-cart text-white text-lg font-bold " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
