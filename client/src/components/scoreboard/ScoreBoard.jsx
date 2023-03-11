import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  // const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score`} data-testid="id-01">X - 0</span>
      <span className={`score o-score`} data-testid="id-02">O - 0</span>
    </div>
  )
}