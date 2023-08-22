import { useState, createContext } from "react";
import { Header } from "./components/Header";
import { Scoreboard } from "./components/Score";
import { Gameboard } from "./components/Gameboard";
import "./game.css";

const CardContext = createContext();

function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState(new Array(12).fill(false));

  return (
    <CardContext.Provider
      value={{ selectedCards, setSelectedCards, currentScore, setCurrentScore }}
    >
      <div className="content">
        <Header />
        <Scoreboard currentScore={currentScore} />
        <Gameboard />
      </div>
    </CardContext.Provider>
  );
}

export { Game, CardContext };
