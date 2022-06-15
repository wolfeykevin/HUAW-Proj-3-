import express from "express";
import { galleryRoute } from "./routes/index.js";
const server = express();
server.use(express.json());
server.use("/api", galleryRoute);
// server.use("api/")
/*
/api/gallery => git all cards

/api/leader-board => git all scores

/api/game/new (POST) => start a new game
  req.body: {name: "ENTER NAME", class: "CLASS"}
  POST player
  POST game_stats
  Set Cookie Header with game_stats_ID

/api/game/continue
  GET game_stats based off cookie header

/api/game/save => saves the game
  req.body: {player_morale | enemy_morale | level | player_id | character_id | enemy_id }
  PATCH game_stats

/api/game/battle => starts a new battle
  return {enemy_id}

/api/game/end => remove game_stat for cookie & post a new highscore if level is greater then highscore
  return to home page.

/api/game/cards/random?=${n} => git n random cards returned

/api/game/classes => git playable classes


SELECT column FROM table
ORDER BY RANDOM()
LIMIT 1

knex('posts').select('*')
  .orderByRaw('RAND()')
  .limit(n)

*/
export default server;
