import React, { useState } from "react";
import "./App.css";
import MemoryGame from "./components/memoryGame";
import GreetingCard from "./components/greetingCard/GreetingCard";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">
      {!gameStarted ? (
        <GreetingCard onStartGame={() => setGameStarted(true)} />
      ) : (
        <MemoryGame />
      )}
    </div>
  );
};

export default App;
