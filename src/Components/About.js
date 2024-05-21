import React from "react";
import Library from "./Assets/Library.jpg";
export default function About() {
  return (
    <div className="Section2 min-h-[600px]">
      <h1 className="text-4xl font-bold pt-5 text-center"> About Us </h1>
      <div className=" container grid grid-cols-2 text-black border-zinc-300  shadow-lg">
        <p className="text-justify p-8">
          Welcome to Elite Emporium, your premier online bookstore where
          literature meets luxury. At Elite Emporium, we believe that books are
          more than just pages and ink; they are gateways to adventure,
          knowledge, and inspiration. Our mission is to curate an exceptional
          collection of books that cater to diverse tastes and preferences,
          ensuring that every reader finds their next favorite read.
          <br></br>
          <br></br>
          Elite Emporium was born out of a passion for books and a desire to
          create a unique shopping experience for book lovers everywhere. What
          started as a small online shop with a carefully selected range of
          titles has grown into a thriving bookstore known for its high-quality
          selections and exceptional customer service. We pride ourselves on
          offering not just bestsellers and classics, but also rare finds and
          hidden gems that you won’t find anywhere else.
        </p>
        <p className=" p-10 ">
          <img src={Library} alt="" />
        </p>
      </div>
    </div>
  );
}
