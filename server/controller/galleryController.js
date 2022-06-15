import knex from "../db/index.js";

const AllCards = (req, res) => {
  knex("cards")
    .select("*")
    .then((data) => {
      res.status(200).send(data);
    });
};

export { AllCards };
