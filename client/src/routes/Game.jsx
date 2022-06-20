import React from "react";
import GameScreen from "../_components/GameScreen";
import { GameProvider } from "../_context/GameProvider";

const Game = () => {
  return (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
};

export default Game;
