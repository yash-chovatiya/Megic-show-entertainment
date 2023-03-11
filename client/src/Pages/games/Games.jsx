import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/topbar/Topbar";
import "./games.css";

function App() {
  return (
    <>
      <TopBar />
      <div className="gamespage">
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

          <div className="gamecard">
            <div className="gamecard-image">
              <img src="../../../games/tck.jpg" alt="" />
            </div>
            <h3 className="gametitle">Tic Tac Toe</h3>
            <Link to={"/games/tictactoe"}>
              <button className="game-btn">Play now</button>
            </Link>
          </div>

          <div className="gamecard">
            <div className="gamecard-image">
              <img src="../../../games/cnc.png" alt="" />
            </div>
            <h3 className="gametitle">Candy Crush</h3>
            <Link to={"/games/candycrush"}>
              <button className="game-btn">Play now</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
