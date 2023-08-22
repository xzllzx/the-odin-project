import { useState, useEffect } from "react";

function Scoreboard({ currentScore }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (currentScore > highScore) setHighScore(currentScore);
  }, [currentScore]);

  useEffect(() => {
    console.log(`currentScore is ${currentScore}`);
  }, [currentScore]);

  return (
    <div className="scoreboard">
      <p className="current-score">Current Score: {currentScore}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  );
}

export { Scoreboard };
