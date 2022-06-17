import { useEffect } from "react";

const useStartGame = () => {
  // const { playerName, playerClass } = req.body;


  // useEffect(() => {
  //   let data = {
  //     playerName: name,
  //     playerClass: className
  //   }

  //   fetch("http://localhost:8080/api/card/gallery", {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(() => console.log("Oops! Starting game failed."));
  // }, []);

  const startGame = (name, className) => {
    console.log('startGame Called, recieved:', name, className)

    let data = {
      playerName: name,
      playerClass: className
    }

    fetch("http://localhost:8080/api/game/", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log(res);
        return res.json()
      })
      .then((data) => {
        console.log(data);
        document.cookie = `player_game_id=${data.id}`
        console.log('Cookie: ', document.cookie)
      })
      .catch((err) => console.log(err + "\nOops! Starting game failed."));
  };

  return { startGame };
};

export default useStartGame;
