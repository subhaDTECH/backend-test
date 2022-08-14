const app = require("./app");
//require dotenv
require("dotenv").config({ path: "./config.env" });

//port
const port = process.env.PORT || 5000;
//connected data base
require("./db/conn");

//listen app
app.listen(port, () => {
  console.log("server connected!!!");
});
