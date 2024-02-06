import { useEffect } from "react";
import "./FlashCard.css";

export default function Card({
  index,
  isClicked1,
  setIsClicked1,
  selectedId1,
  handleSelectId1,
  selectedIdRef1,
  isClicked2,
  setIsClicked2,
  selectedId2,
  handleSelectId2,
  selectedIdRef2,
  isPairedArray,
  handleAddToPairArray,
}) {
  useEffect(() => {
    async function handlePush() {
      if (isClicked1 && isClicked2) {
        await handleAddToPairArray(selectedId1, selectedId2);
        // reset code for cards
        setIsClicked1(() => false);
        handleSelectId1(-1);
        setIsClicked2(() => false);
        handleSelectId2(-1);
      }
    }
    handlePush();
  }, [
    isClicked1,
    isClicked2,
    handleAddToPairArray,
    selectedId1,
    selectedId2,
    setIsClicked1,
    setIsClicked2,
    handleSelectId1,
    handleSelectId2,
  ]);
  function handleClick(index) {
    if (selectedIdRef1.current === -1 && selectedIdRef2.current !== index) {
      return new Promise((resolve) => {
        handleSelectId1(index);
        resolve(); // Resolve the promise when handleClick is done
        return; // skill issue
      });
    }
    if (selectedIdRef2.current === -1 && selectedIdRef1.current !== index) {
      return new Promise((resolve) => {
        handleSelectId2(index);
        resolve(); // Resolve the promise when handleClick is done
        return; // skill issue
      });
    }
  }

  function handleChange() {
    if (selectedIdRef1.current === index) {
      if (isClicked1 && index === selectedId1) {
        setIsClicked1(() => false);
        handleSelectId1(-1);
        return;
      }
      if (selectedIdRef1.current === index) {
        setIsClicked1(() => true);
      }
    }
    if (selectedIdRef2.current === index) {
      if (isClicked2 && index === selectedId2) {
        setIsClicked2(() => false);
        handleSelectId2(-1);
        return;
      }
      if (selectedIdRef2.current === index) {
        setIsClicked2(() => true);
      }
    }
  }

  const handleClickAndChange = async () => {
    await handleClick(index); // Wait for handleClick to complete
    handleChange(); // Then execute handleChange
  };

  return (
    <div
      className={
        isPairedArray.includes(index)
          ? "main paired"
          : (isClicked1 && index === selectedId1) ||
            (isClicked2 && index === selectedId2)
          ? "main front"
          : "main back"
      }
      onClick={() => {
        console.log("click");
        handleClickAndChange();
      }}
    >
      {isPairedArray.includes(index)
        ? "paired"
        : (isClicked1 && index === selectedId1) ||
          (isClicked2 && index === selectedId2)
        ? "front"
        : "back"}
    </div>
  );
}
