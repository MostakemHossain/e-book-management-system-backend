import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  jwt_access_serect: process.env.JWT_ACCESS_SERECT,
  jwt_access_serect_expires_in: process.env.JWT_EXPIRES_IN,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
};

export default config;
