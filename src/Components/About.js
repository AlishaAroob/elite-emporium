import React from "react";
import Library from "./Assets/Library.jpg";
export default function About() {
  return (
    <div className="Section2 min-h-[600px] shadow-md">
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
        <h1 className="text-4xl font-bold pt-5 text-center">
          {" "}
          Our Collection{" "}
          <p className="text-lg font-normal p-8 mt-4 text-justify ">
            Our extensive catalog spans various genres, including fiction,
            non-fiction, mystery, romance, science fiction, fantasy, and more.
            Whether you're looking for the latest releases, timeless classics,
            or niche titles, Elite Emporium has something to captivate every
            reader. We also offer a selection of beautifully designed special
            editions and collector’s items that make perfect gifts for the
            bibliophiles in your life.
          </p>
        </h1>
        <p></p>
      </div>
    </div>
  );
}
