import { useState } from "react";

function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <p className="current-score">Current Score: {currentScore}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  );
}

export { Scoreboard };
