const gameServer = "http://localhost:8080/";
const save = async (gameId) => {
  // create a new game id if gameId is undefined
  // fetch(gameServer + "api/game/new").then((res) => res.json());
  // otherwise, write game data to existing game id
};

const load = (gameId) => {
  // hit endpoint for game data
  // format data as necessary
  // return game data
};

export { save, load };
