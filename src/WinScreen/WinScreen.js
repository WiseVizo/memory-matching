import React from "react";
import "./WinScreen.css";

const WinScreen = ({ isWon }) => {
  if (!isWon) {
    return null; // Don't render anything if isWon is false
  }

  return (
    <div className="win-screen">
      <h1>Congratulations! You've won!</h1>
      {/* Additional content or styling can be added here */}
    </div>
  );
};

export default WinScreen;
