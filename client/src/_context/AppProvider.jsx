import { createContext } from "react";
import useGlobalState from "./states/useGlobalState";
import useIsLoading from "./states/useIsLoading";
import useGameData from "./states/useGameData";
import useStartGame from "./effects/useStartGame";
import useResumeGame from "./effects/useResumeGame";


const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const { globalState, setGlobalState } = useGlobalState();
  const { isLoading, setIsLoading } = useIsLoading();
  const { gameData, setGameData } = useGameData();
  const { startGame } = useStartGame();
  const { resumeGame } = useResumeGame();

  const store = {
    /* GETTERS */
    globalState,
    isLoading,
    gameData,


    /* SETTERS */
    setGlobalState,
    setIsLoading,
    setGameData,

    /* EFFECTS */
    startGame,
    resumeGame,
  };

  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, AppProvider };
