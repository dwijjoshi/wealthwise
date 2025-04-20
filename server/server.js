const app = require("./app");
const { connectDatabase } = require("./config/database");

connectDatabase();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
