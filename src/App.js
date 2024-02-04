import "./App.css";
import FlashCard from "./FlashCard/FlashCard";

function App() {
  return (
    <div className="App">
      <h2>Pair All Cards With Same Contents To Win.</h2>
      <div className="body">
        {[...Array(9)].map((_, index) => (
          <FlashCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
