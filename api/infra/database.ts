import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_NAME: string = String(process.env.DB_NAME);
const DB_USER: string = String(process.env.DB_USER);
const DB_PASSWORD: string = String(process.env.DB_PASSWORD);
const DB_HOST: string = String(process.env.DB_HOST);

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Success connected database"))
  .catch((error) => console.log("Error: " + error));


