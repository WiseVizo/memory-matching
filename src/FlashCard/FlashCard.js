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
    return new Promise((resolve) => {
      handleSelectId1(index);
      resolve(); // Resolve the promise when handleClick is done
    });
  }

  function handleChange() {
    if (isClicked && index === selectedId1) {
      setIsClicked(() => false);
      return;
    }
    if (selectedIdRef1.current === index) {
      setIsClicked(() => true);
    }
  }

  const handleClickAndChange = async () => {
    await handleClick(index); // Wait for handleClick to complete
    handleChange(); // Then execute handleChange
  };

  return (
    <div
      className={
        isClicked && index === selectedId1 ? "main front" : "main back"
      }
      onClick={() => {
        handleClickAndChange();
      }}
    >
      {isClicked && index === selectedId1 ? "front" : "back"}
    </div>
  );
}
