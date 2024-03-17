import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [show, setShow] = useState({
      title: "",
      description: "",
      seasons: null,
      cover: "",
    });
    const [error, setError] = useState(null);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const value = e.target.name === 'seasons' ? parseInt(e.target.value, 10) : e.target.value;
      setShow((prev) => ({ ...prev, [e.target.name]: value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
  
      try {
        console.log("1: ", show);
        await axios.post("http://localhost:8800/shows", show);
        console.log(show);
        setError(null); // Clear the error state on success
        navigate("/");
      } catch (err) {
        console.log(err);
        setError("Something went wrong!");
      }
    };
  

  return (
    <div className="form">
      <h1>Add New show</h1>
      <input
        type="text"
        placeholder="show title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="show description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="show cover"
        name="cover"
        onChange={handleChange}
      />
       <input
        type="number"
        placeholder="show seasons"
        name="seasons"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all shows</Link>
    </div>
  );
};

export default Add;