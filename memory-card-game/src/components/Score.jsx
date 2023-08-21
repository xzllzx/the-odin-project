import { useState } from "react";

function Scoreboard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <p className="hello-world">Hello World! How are you?</p>
    </>
  );
}

export { Scoreboard };
