import express from "express";
const router = express.Router();

import { allScores } from "../controller/leaderboardController.js";

router.route("/leader-board").get(allScores);

export default router;
