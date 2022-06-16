import { useEffect } from "react";

const useStartGame = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/card/gallery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(() => console.log("Oops! Starting game failed."));
  }, []);

  const startGame = () => {};

  return { startGame };
};

export default useStartGame;
