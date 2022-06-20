import { useState } from "react";

const useGameLog = () => {
  const [gameLog, setGameLogArray] = useState([]);

  const setGameLog = (newState) => {
    setGameLogArray(newState);
  };

  return { gameLog, setGameLog };
};

export default useGameLog;