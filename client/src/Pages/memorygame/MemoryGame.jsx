import React from "react";
import "./memorygame.css";
import Cards from "../../components/Cards/Cards";
import TopBar from "../../components/topbar/Topbar";
export default function MemoryGame() {
  return (
    <div>
      <TopBar />
      <div className="memorygame">
        <h2>Memory Game</h2>
        <Cards />
      </div>
    </div>
  );
}
