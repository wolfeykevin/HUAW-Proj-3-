import { useState } from "react";

const useGameData = () => {
  const [gameData, setGameDataObj] = useState({});

  const setGameData = (newState) => {
    setGameDataObj(newState);
  };

  return { gameData, setGameData };
};

export default useGameData;
