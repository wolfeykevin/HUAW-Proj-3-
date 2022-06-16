import knex from "../db/index.js";

const allScores = (req, res) => {
  knex("player")
    .select("name", "highscore")
    .orderBy("highscore", "desc", "last")
    .then((data) => res.status(200).json(data));
};

export { allScores };
