import { createContext } from "react";
import useGlobalConfig from "./states/useGlobalConfig";
import useIsLoading from "./states/useIsLoading";
import useFetchUser from "./effects/useFetchUser";

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const { globalConfig, setGlobalConfig } = useGlobalConfig();
  const { isLoading, setIsLoading } = useIsLoading();
  const { fetchUser } = useFetchUser();

  const store = {
    /* GETTERS */
    globalConfig,
    isLoading,

    /* SETTERS */
    setGlobalConfig,
    setIsLoading,

    /* EFFECTS */
    fetchUser,
  };

  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, AppProvider };
