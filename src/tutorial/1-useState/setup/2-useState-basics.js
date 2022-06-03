import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Ohayou gozaimasu");
  const handleClick = () => {
    title === "Ohayou gozaimasu"
      ? setTitle("Hello Ruby")
      : setTitle("Ohayou gozaimasu");
  };
  return (
    <>
      <h1>{title}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
