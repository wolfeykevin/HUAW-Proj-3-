import { useState } from "react";

const useGameState = () => {
  const [gameState, setGameStateString] = useState('loading');

  const setGameState = (newState) => {
    setGameStateString(newState);
  };

  return { gameState, setGameState };
};

export default useGameState;
