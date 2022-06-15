import knex from "knex";
import configuration from "../knexfile.js";
const dataBase = knex(configuration.development);
export default dataBase;
