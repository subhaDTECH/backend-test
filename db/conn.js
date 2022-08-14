const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
  })
  .then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  })
  .catch((e) => {
    console.log(e, "\n while connection to databasee");
  });
