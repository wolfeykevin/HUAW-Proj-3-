import express from "express";
import cors from "cors";
import { cardRoute, leaderBoardRoute, gameRoute } from "./routes/routes.js";
import cookieParser from "cookie-parser";
const server = express();
server.use(express.json());
server.use(cookieParser());


var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ["GET","POST","DELETE","UPDATE", "PUT", "PATCH"],
  credentials: true,
}

server.use(cors(corsOptions));
server.use("/api", cardRoute);
server.use("/api", leaderBoardRoute);
server.use("/api", gameRoute);
// server.use("api/")
/*

X /api/gallery => git all cards

X /api/leader-board => git all scores

X /api/game/new (POST) => start a new game
  req.body: {name: "ENTER NAME", class: "CLASS"}
  POST player
  POST game_stats
  Set Cookie Header with game_stats_ID

X /api/game/continue
  GET game_stats based off cookie header

X /api/game/save => saves the game
  req.body: {player_morale | enemy_morale | level | player_id | character_id | enemy_id }
  PATCH game_stats

/api/game/battle => starts a new battle
  return {enemy_id}

  REWORKING
/api/game/end => remove game_stat for cookie & post a new highscore if level is greater then highscore
  return to home page.

X /api/game/cards/random?=${n} => git n random cards returned

/api/game/classes => git playable classes

requestNewBattle will update the game_stats table with random enemy_id and its corresponding enemy_morale


SELECT column FROM table
ORDER BY RANDOM()
LIMIT 1

knex('posts').select('*')
  .orderByRaw('RAND()')
  .limit(n)

*/
export default server;
