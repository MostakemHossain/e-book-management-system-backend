import app from "./app";
import config from "./config";
import connectDB from "./config/db";

const port = process.env.PORT;
const main = async () => {
  await connectDB();
  app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}/`);
  });
};

main();
