import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shows = () => {
  const [shows, setshows] = useState([]);

  useEffect(() => {
    const fetchAllshows = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shows");
        console.log('shows: ', res.data)
        setshows(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllshows();
  }, []);

  console.log(shows);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/shows/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Your Watch-list</h1>
      <div className="shows">
        {shows.map((show) => (
          <div key={show.id} className="show">
            <img src={show.cover} alt="" />
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <span>Seasons: {show.seasons}</span>
            <button className="delete" onClick={() => handleDelete(show.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${show.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new show
        </Link>
      </button>
    </div>
  );
};

export default Shows;