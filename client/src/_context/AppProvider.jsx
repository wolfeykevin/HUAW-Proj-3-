import { createContext } from "react";
import useGlobalState from "./states/useGlobalState";
import useIsLoading from "./states/useIsLoading";
import useStartGame from "./effects/useStartGame";

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const { globalState, setGlobalState } = useGlobalState();
  const { isLoading, setIsLoading } = useIsLoading();
  const { startGame } = useStartGame();

  const store = {
    /* GETTERS */
    globalState,
    isLoading,

    /* SETTERS */
    setGlobalState,
    setIsLoading,

    /* EFFECTS */
    startGame,
  };

  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, AppProvider };
