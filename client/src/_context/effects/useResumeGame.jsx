import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useResumeGame = () => {


  const resumeGame = () => {
    console.log('Resume Game Called')


    let gameData = fetch("http://localhost:8080/api/game/", {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("This should be game data:", data);
        return data;
      })
      .catch((err) => {
        console.log(err + "\nOops! Resuming game failed.")
        return undefined;
    });

    return gameData
  };

  return { resumeGame };
};

export default useResumeGame;
