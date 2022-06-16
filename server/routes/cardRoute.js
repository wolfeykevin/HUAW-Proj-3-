import express from "express";
const router = express.Router();

import { AllCards, getRandomCards } from "../controller/cardController.js";

router.route("/card/gallery").get(AllCards);
// api/card/gallery => returns all cards in the database
router.route("/card/random").get(getRandomCards);
// api/card/random/?limit=3 => return 3 cards

export default router;
