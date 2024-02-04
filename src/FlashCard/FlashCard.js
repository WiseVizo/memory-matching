// import { useState } from "react";
// import { useEffect } from "react";
import "./FlashCard.css";

export default function Card({
  isClicked,
  setIsClicked,
  index,
  selectedId1,
  handleSelectId1,
  selectedIdRef1,
}) {
  function handleClick(index) {
    handleSelectId1(index);
  }

  function handleChange() {
    console.log("hi: " + selectedIdRef1.current);
    if (selectedIdRef1.current === index) {
      setIsClicked(() => !isClicked);
    }
  }
  // useEffect(() => {
  //   setSelectedId(() => index);
  // }, [index, setSelectedId]);
  return (
    <div
      className={
        isClicked && index === selectedId1 ? "main front" : "main back"
      }
      onClick={() => {
        handleClick(index);
        handleChange();
      }}
    >
      {isClicked && index === selectedId1 ? "front" : "back"}
    </div>
  );
}
