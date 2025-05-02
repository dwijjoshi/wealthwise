const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://aasthatandel93:rYYAqrGBISDzi5SF@wealthwise.kjqnrni.mongodb.net/"
    )
    .then((con) => console.log(`Database connected : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
