import React, { useState } from "react";
import { trending } from "../../dummyData";
import Movie from "../movie/movie";
import "./trending.css";

const Trending = () => {
  const [items, setItems] = useState(trending);
  return (
    <>
      <div className="trend-title">
        <div className="heading">
          <h1>Trending Movies</h1>
        </div>
      </div>
      <section className="trending">
        <Movie items={items} />
      </section>
    </>
  );
};

export default Trending;
