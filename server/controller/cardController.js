import knex from "../db/index.js";

const AllCards = (req, res) => {
  knex("cards")
    .select("*")
    .then((data) => {
      console.log(req)
      console.log(req.cookies)
      console.log(req.cookie)
      res.status(200).send(data);
    });
};

const getRandomCards = (req, res) => {
  let numCards = parseInt(req.query.limit);

  if (isNaN(numCards)) {
    numCards = 1;
  }
  knex("cards")
    .select("*")
    .orderByRaw("RANDOM ()")
    .limit(numCards)
    .then((data) => res.status(200).json(data));
};

export { AllCards, getRandomCards };
