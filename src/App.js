import { useEffect, useRef, useState } from "react";
import "./App.css";
import FlashCard from "./FlashCard/FlashCard";
import WinScreen from "./WinScreen/WinScreen";

const cardData = [
  {
    id: 1,
    value: "apple",
    imageUrl: "https://example.com/banana.jpg",
  },
  {
    id: 2,
    value: "banana",
    imageUrl: "https://example.com/banana.jpg",
  },
  {
    id: 3,
    value: "C#",
    imageUrl: "https://example.com/javascript.png",
  },
  {
    id: 4,
    value: "python",
    imageUrl: "https://example.com/python.png",
  },
  {
    id: 5,
    value: "orange",
    imageUrl: "https://example.com/orange.jpg",
  },
  {
    id: 6,
    value: "java",
    imageUrl: "https://example.com/java.png",
  },
  {
    id: 7,
    value: "apple",
    imageUrl: "https://example.com/banana.jpg",
  },
  {
    id: 8,
    value: "banana",
    imageUrl: "https://example.com/banana.jpg",
  },
  {
    id: 9,
    value: "C#",
    imageUrl: "https://example.com/javascript.png",
  },
  {
    id: 10,
    value: "python",
    imageUrl: "https://example.com/python.png",
  },
  {
    id: 11,
    value: "orange",
    imageUrl: "https://example.com/orange.jpg",
  },
  {
    id: 12,
    value: "java",
    imageUrl: "https://example.com/java.png",
  },
];

function shuffleArray(arr) {
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function App() {
  useEffect(() => {
    shuffleArray(cardData);
  }, []);

  const [selectedId1, setSelectedId1] = useState(-1);
  const [isClicked1, setIsClicked1] = useState(false);
  const selectedIdRef1 = useRef(selectedId1);
  const [isPairedArray, setIsPairedArray] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const numCards = 12;
  function onExit() {
    console.log("Reset");
    setIsPairedArray([]);
    setIsWon(false);
  }
  useEffect(() => {
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
        setIsPairedArray(() => arr);
      }
      resolve();
    }); // Resolve the promise when handleClick is done
  }

  function handleSelectId1(id, value) {
    setValue1(() => value);
    setSelectedId1(() => {
      selectedIdRef1.current = id;
      return id;
    });
  }

  const [selectedId2, setSelectedId2] = useState(-1);
  const [isClicked2, setIsClicked2] = useState(false);
  const selectedIdRef2 = useRef(selectedId2);

  function handleSelectId2(id, value) {
    setValue2(() => value);
    setSelectedId2(() => {
      selectedIdRef2.current = id;
      return id;
    });
  }

  return (
    <div className="App">
      <h2>Pair All Cards With Same Contents To Win.</h2>
      <WinScreen isWon={isWon} onExit={onExit} />
      <div className="body">
        {cardData.map((card, index) => {
          return (
            <FlashCard
              key={card.id}
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
              content={card.value}
              value1={value1}
              value2={value2}
            />
          );
        })}
      </div>
      <h3>
        note: every card can be paired with every other card until the content
        is added in them
      </h3>
    </div>
  );
}
// * extention name: Better Comments
// todo: survive
// * info
// ! warning
// ? question
export default App;
