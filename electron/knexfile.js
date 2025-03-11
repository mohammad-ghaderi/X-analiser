const { app } = require('electron');
const path = require('path');

const dbPath = path.join(app.getPath("userData"), "database.sqlite");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true, // Required for SQLite
};

module.exports = knexConfig;
