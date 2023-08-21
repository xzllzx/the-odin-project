import { useState } from "react";
import { Card } from "./components/Card";
import "./game.css";

function Game() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="hello-world">Hello World! How are you?</p>
      <Card />
    </>
  );
}

export { Game };
