import TopBar from "../../components/topbar/Topbar";
import "./home.css";
import { Link } from "react-router-dom";
import Movies from "../../components/movies/Movies";
import Upcomming from "../../components/upcoming/Upcoming";
import { latest } from "../../dummyData";
import React, { useState } from "react";

export default function Home() {
  const [item, setItem] = useState(latest);
  return (
    <>
      <TopBar />
      <div className="home-page">
        <div className="home-banner">
          <img
            src="../../../images/homebanner.jpg"
            alt=""
            className="home-banner-img"
          />
          <div className="banner-title">
            <h1>Welcome To MagicShow Entertainment</h1>
          </div>
        </div>

        <div className="gamespage">
          <div className="home-game-title">
            <h1>Trending Games</h1>
            <Link to={"/games"}>
              <button className="view-all-btn">View All</button>
            </Link>
          </div>
          <section className="containergame">
            <div className="gamecard">
              <div className="gamecard-image">
                <img src="../../../games/memory.png" alt="" />
              </div>
              <h3 className="gametitle">Memory Game</h3>
              <Link to={"/games/memorygame"}>
                <button className="game-btn">Play now</button>
              </Link>
            </div>

            <div className="gamecard">
              <div className="gamecard-image">
                <img src="../../../games/2048.jpg" alt="" />
              </div>
              <h3 className="gametitle">2048 Game</h3>
              <Link to={"/games/2048"}>
                <button className="game-btn">Play now</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Movies />
      <Upcomming items={item} title="Latest Movies" />
    </>
  );
}
