import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
};

export default config;
