import React from "react";
import "./WinScreen.css";
const WinScreen = ({ isWon, onExit }) => {
  if (!isWon) {
    return null; // Don't render anything if isWon is false
  }

  return (
    <div className="win-screen">
      <div className="content">
        <h1 className="animated-text">You Won!</h1>
        <button className="exit-button" onClick={onExit}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
