import { useState } from "react";

const useIsLoading = () => {

  const [isLoading, setIsLoadingState] = useState('false');

  const setIsLoading = (newState) => {
    setIsLoadingState(newState);
  }

  return { isLoading, setIsLoading };

}

export default useIsLoading