import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const arr = [
  { id: 1, name: "Aman", age: "25", location: "Delhi" },
  { id: 2, name: "Ashish", age: "28", location: "Rajasthan" },
  { id: 3, name: "Vimal", age: "24", location: "MP" },
];

function Contact() {
  const navigate = useNavigate();

  const handleClick = (val) => {
    navigate(`/product/${val.id}`, { state: val });
  };
  return (
    <>
      <div>Contact</div>
      {arr.map((el) => (
        <div>
          <div onClick={() => handleClick(el)}>{el.name}</div>
        </div>
      ))}
      <Link to="/custom-hook">Custom Hook</Link>
      <Link to="/promise">Promise</Link>
    </>
  );
}

export default Contact;
