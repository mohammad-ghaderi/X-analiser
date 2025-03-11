const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig);

const initDB = async () => {
  try {
    // Ensure 'users' table exists
    const usersExists = await db.schema.hasTable("users");
    if (!usersExists) {
      await db.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").unique().notNullable();
      });
      console.log("Users table created.");
    }

    // Ensure 'analysis' table exists
    const analysisExists = await db.schema.hasTable("analysis");
    // if (analysisExists) {
    //   await db.schema.dropTable("analysis");
    //   console.log("Old analysis table dropped.");
    // }

    if (!analysisExists) {
      await db.schema.createTable("analysis", (table) => {
        table.increments("id").primary();
        table.integer("type").notNullable(); // Changed to integer
        table.integer("category").notNullable(); // Changed to integer
        table.json("data").notNullable();
        table.timestamp("created_at").defaultTo(db.fn.now());
        table.timestamp("last_edited").defaultTo(db.fn.now());
      });
      console.log("Analysis table created.");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

initDB();

module.exports = db;
