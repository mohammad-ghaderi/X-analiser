import path from "path";
import { app } from "electron";

const dbPath = path.join(app.getPath("userData"), "database.sqlite");

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true, // Required for SQLite
};

export default knexConfig;
