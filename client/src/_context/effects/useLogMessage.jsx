import { useEffect } from "react";

const useLogMessage = (gameLog, setGameLog) => {

  const logMessage = (message) => {
    if (!Array.isArray(message)) {
      message = [message]
    }
    setGameLog([...message, ...gameLog])
  }

  return { logMessage };
};

export default useLogMessage;
