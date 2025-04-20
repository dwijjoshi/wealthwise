const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://dwijjoshi02:1kg3aSSBZCz63xo1@wealthwise.gao49wg.mongodb.net/"
    )
    .then((con) => console.log(`Database connected : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
