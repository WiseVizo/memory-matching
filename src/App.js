import { useEffect, useRef, useState } from "react";
import "./App.css";
import FlashCard from "./FlashCard/FlashCard";
import WinScreen from "./WinScreen/WinScreen";

function App() {
  const [selectedId1, setSelectedId1] = useState(-1);
  const [isClicked1, setIsClicked1] = useState(false);
  const selectedIdRef1 = useRef(selectedId1);
  const [isPairedArray, setIsPairedArray] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const numCards = 12;
  useEffect(() => {
    // console.log("length: " + isPairedArray.length);
    if (isPairedArray.length === numCards) {
      setIsWon(true);
    }
  }, [setIsWon, isPairedArray.length]);

  function handleAddToPairArray(id1, id2) {
    return new Promise((resolve) => {
      if (!isPairedArray.includes(id1) && !isPairedArray.includes(id2)) {
        const arr = isPairedArray;
        arr.push(id1);
        arr.push(id2);
        // console.log("arr: " + arr);
        // console.log("length: " + isPairedArray.length);
        setIsPairedArray(() => arr);
      }
      resolve();
    }); // Resolve the promise when handleClick is done
  }

  function handleSelectId1(id) {
    setSelectedId1(() => {
      // console.log("ID1-B4: " + selectedId1);
      selectedIdRef1.current = id;
      // console.log("ID1: " + id);
      return id;
    });
  }

  const [selectedId2, setSelectedId2] = useState(-1);
  const [isClicked2, setIsClicked2] = useState(false);
  const selectedIdRef2 = useRef(selectedId2);

  function handleSelectId2(id) {
    setSelectedId2(() => {
      // console.log("ID2-B4: " + selectedId2);
      selectedIdRef2.current = id;
      // console.log("ID2: " + id);
      return id;
    });
  }

  return (
    <div className="App">
      <h2>Pair All Cards With Same Contents To Win.</h2>
      <WinScreen isWon={isWon} />
      <div className="body">
        {[...Array(numCards)].map((_, index) => (
          <FlashCard
            key={index}
            index={index}
            isClicked1={isClicked1}
            setIsClicked1={setIsClicked1}
            selectedId1={selectedId1}
            handleSelectId1={handleSelectId1}
            selectedIdRef1={selectedIdRef1}
            isClicked2={isClicked2}
            setIsClicked2={setIsClicked2}
            selectedId2={selectedId2}
            handleSelectId2={handleSelectId2}
            selectedIdRef2={selectedIdRef2}
            handleAddToPairArray={handleAddToPairArray}
            isPairedArray={isPairedArray}
          />
        ))}
      </div>
      <h3>
        note: every card can be paired with every other card until the content
        is added in them
      </h3>
    </div>
  );
}

export default App;
