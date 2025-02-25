import knex from "knex";
import knexConfig from "./knexfile.js";

const db = knex(knexConfig);

// Ensure table exists
const initDB = async () => {
  
};

initDB();

export default db;
