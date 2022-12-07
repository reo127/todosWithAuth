const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn) => {
      console.log(`Connected Database Successfully`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
