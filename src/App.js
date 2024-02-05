import { useRef, useState } from "react";
import "./App.css";
import FlashCard from "./FlashCard/FlashCard";

function App() {
  const [selectedId1, setSelectedId1] = useState(-1);
  const [isClicked, setIsClicked] = useState(false);
  const selectedIdRef1 = useRef(selectedId1);
  function handleSelectId1(id) {
    setSelectedId1(() => {
      selectedIdRef1.current = id;
      return id;
    });
  }
  return (
    <div className="App">
      <h2>Pair All Cards With Same Contents To Win.</h2>
      <div className="body">
        {[...Array(9)].map((_, index) => (
          <FlashCard
            key={index}
            index={index}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            selectedId1={selectedId1}
            handleSelectId1={handleSelectId1}
            selectedIdRef1={selectedIdRef1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
