import app from "./app";

//loading environment variables
require ("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log(`Ski Dictionary at http://localhost:3000`);
});
