import { useState } from "react";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Score";
import { Gameboard } from "./components/Gameboard";
import "./game.css";

function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div className="content">
      <Header />
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <Gameboard selectedCards={selectedCards} />
    </div>
  );
}

export { Game };
