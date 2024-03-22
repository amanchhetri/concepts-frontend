import React from "react";
import { Link } from "react-router-dom";

const arr = [
  { id: 1, name: "Aman", age: "25", location: "Delhi" },
  { id: 2, name: "Ashish", age: "28", location: "Rajasthan" },
  { id: 3, name: "Vimal", age: "24", location: "MP" },
];

function Contact() {
  return (
    <>
      <div>Contact</div>
      {arr.map((el) => (
        <div>
        <Link to={`/product/${el.id}`}>{el.name}</Link>
        </div>
      ))}
    </>
  );
}

export default Contact;
