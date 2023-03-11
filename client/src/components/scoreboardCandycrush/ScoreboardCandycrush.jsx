const ScoreBoardCandycrush = ({ score }) => {
  return (
    <div className="score-board">
      <h4 style={{ color: "white" }}>Score</h4>
      <h1 style={{ color: "white" }}>{score}</h1>
    </div>
  );
};

export default ScoreBoardCandycrush;
