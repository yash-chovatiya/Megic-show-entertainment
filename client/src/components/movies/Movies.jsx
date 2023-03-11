import React, { useState } from "react";
import "./movies.css";
import { homeData } from "../../dummyData";
import Movie from "../movie/movie";

const Homes = () => {
  const [items, setItems] = useState(homeData);

  return (
    <>
      <section className="movies">
        <Movie items={items} />
      </section>
      {/* <div className="mragin"></div> */}
    </>
  );
};

export default Homes;
