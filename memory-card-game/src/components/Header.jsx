import { useState } from "react";

function Header() {
  return (
    <div className="header">
      <div className="welcome">Welcome to the Game of Memories!</div>
      <div className="description">
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
    </div>
  );
}

export { Header };
