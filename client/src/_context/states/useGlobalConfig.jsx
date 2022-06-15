import { useState } from "react";

const useGlobalConfig = () => {

  const [globalConfig, setGlobalConfigState] = useState({
    theme: "light",
    language: "en",
    currency: "usd",
  });

  const setGlobalConfig = (newState) => {
    setGlobalConfigState(newState);
  }

  return { globalConfig, setGlobalConfig };

}

export default useGlobalConfig