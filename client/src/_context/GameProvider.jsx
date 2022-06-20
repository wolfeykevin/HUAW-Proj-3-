import { createContext, useRef } from "react";
import useGameData from "./states/useGameData";
import useGameState from "./states/useGameState";
import useGameLog from "./states/useGameLog";
import usePlayerHand from "./states/usePlayerHand";
import useLogMessage from "./effects/useLogMessage";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const { gameData, setGameData } = useGameData();
  const { gameState, setGameState } = useGameState();
  const { gameLog, setGameLog } = useGameLog();
  const { playerHand, setPlayerHand } = usePlayerHand();
  const { logMessage } = useLogMessage(gameLog, setGameLog);
  const prevGameState = useRef();

  const game = {
    /* GETTERS */
    gameData,
    gameState,
    gameLog,
    playerHand,
    prevGameState,

    /* SETTERS */
    setGameData,
    setGameState,
    setGameLog,
    setPlayerHand,

    /* EFFECTS */
    logMessage
  };


  return (
    <GameContext.Provider value={{ game }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
