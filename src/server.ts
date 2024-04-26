import app from "./app";

const port = process.env.PORT || 4000;
const main = () => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
};

main();
