import React from "react";
import "./GreetingCard.css";

interface GreetingCardProps {
  onStartGame: () => void;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ onStartGame }) => {
  return (
    <div className="greeting-card">
      <h1>Buon Natale, Amore Mio!</h1>
      <p>Ti auguro un Natale pieno di gioia e felicità.</p>
      <button onClick={onStartGame}>Inizia il Gioco delle Coppie</button>
    </div>
  );
};

export default GreetingCard;
