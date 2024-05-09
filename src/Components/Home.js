import React from "react";
import Cover from "./Assets/Cover.jpg";

export default function Home() {
  return (
    <div
      className="Section h-96 bg-cover"
      style={{ backgroundImage: `url(${Cover})` }}
    >
      <h1 className="text-black text-2xl font-bold">
        Welcome to Elite Emporium
      </h1>
    </div>
  );
}
