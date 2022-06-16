import express from "express";
const router = express.Router();

import {
  continueGame,
  saveGame,
  newGame,
  deleteGame,
  requestNewBattle,
} from "../controller/gameController.js";

router.route("/game").post(newGame);
// api/game (req.body{playerName: STRING, playerClass: STRING}) => return cookie that points to a row in game_stats database
router.route("/game").get(continueGame);
// /api/game => the already created game instance for the player from the cookie that is set in the response from the post above
router.route("/game").patch(saveGame);
// /api/game (req.body {player_morale | enemy_morale | level | player_id | character_id | enemy_id }) + cookie => return confirm save.
router.route("/game").delete(deleteGame);
// /api/game cookie needed => deletes the players game using the players stored game id

export default router;
