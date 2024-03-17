import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [show, setShow] = useState({
    title: "",
    description: "",
    cover: "",
    seasons: null
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const showId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setShow((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/shows/${showId}`, show);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the show</h1>
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
        name="season"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all shows</Link>
    </div>
  );
};

export default Update;