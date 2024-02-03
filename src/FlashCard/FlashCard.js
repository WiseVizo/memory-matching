import { useState } from "react";
import "./FlashCard.css";

export default function Card() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(() => !isClicked);
  }
  return (
    <div
      className={isClicked ? "main front" : "main back"}
      onClick={handleClick}
    >
      {isClicked ? "front" : "back"}
    </div>
  );
}
