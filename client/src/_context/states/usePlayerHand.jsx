import { useState } from "react";

const usePlayerHand = () => {
  const [playerHand, setPlayerHandArray] = useState([]);

  const setPlayerHand = (newState) => {
    setPlayerHandArray(newState);
  };

  return { playerHand, setPlayerHand };
};

export default usePlayerHand;
