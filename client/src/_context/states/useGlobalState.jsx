import { useState } from "react";

const useGlobalState = () => {
  const [globalState, setGlobalStateObj] = useState({
    theme: "light",
    language: "en",
  });

  const setGlobalState = (newState) => {
    setGlobalStateObj(newState);
  };

  return { globalState, setGlobalState };
};

export default useGlobalState;
