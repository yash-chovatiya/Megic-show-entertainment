import React, { useState } from "react";
import { latest, recommended, upcome } from "../../dummyData";
import TopBar from "../../components/topbar/Topbar";
import Movies from "../../components/movies/Movies";
import Trending from "../../components/trending/Trending";
import Upcomming from "../../components/upcoming/Upcoming";

const MoviePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <TopBar />
      <Movies />
      <Upcomming items={items} title="Upcomming Movies" />
      <Trending />
      <Upcomming items={item} title="Latest Movies" />
    </>
  );
};

export default MoviePage;
