import express from "express";
const router = express.Router();

import { AllCards } from "../controller/galleryController.js";

router.route("/gallery").get(AllCards);

export default router;
