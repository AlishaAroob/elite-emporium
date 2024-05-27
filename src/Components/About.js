import React from "react";
import Library from "./Assets/Library.jpg";
import Collection from "./Assets/Collection.png";
import Collection3 from "./Assets/Collection3.webp";

export default function About() {
  return (
    <div className="Section2 min-h-[500px] shadow-lg">
      <h1 className="text-4xl font-bold pt-5 text-center"> About Us </h1>
      <div className=" container grid grid-cols-2 text-black border-zinc-300  ">
        <p className="text-justify ml-8 mt-2 p-10">
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
        <p className="p-14 mt-4 ">
          <img src={Library} alt="" />
        </p>
        <h1 className="text-center text-2xl font-bold">Why Choose Us?</h1>
        <p></p>
        <p className=" text-justify ml-8 p-10 mt-24">
          1. Curated Selection: Our team of passionate book experts handpicks
          every title to ensure a diverse and high-quality collection.
        </p>
        <p className="p-10 mt-4 box-border shadow-lg">
          {" "}
          <img className=" h-56  w-96 ml-20" src={Collection} alt="" />
        </p>
        <p className=" text-justify ml-8 p-10 mt-24">
          2. Exclusive Editions: Discover unique editions and exclusive releases
          that you won't find anywhere else.
        </p>
        <p className="p-10 mt-4 box-border shadow-lg">
          {" "}
          <img className=" h-56  w-96 ml-20" src={Collection3} alt="" />
        </p>
        <p className=" text-justify ml-8 p-10 mt-24">
          3. Personalized Service: We offer personalized recommendations and
          dedicated customer support to help you find exactly what you're
          looking for.
        </p>
        <p className="p-10 mt-4 box-border shadow-lg">
          {" "}
          <img className=" h-56  w-96 ml-20" src={Collection3} alt="" />
        </p>
      </div>
    </div>
  );
}
