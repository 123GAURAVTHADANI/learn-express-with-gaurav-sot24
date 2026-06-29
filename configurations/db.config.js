const { mongoose } = require("mongoose");

function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/FSD24?appName=Cluster0",
    )
    .then(() => {
      console.log("🚀 Connected to DB");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = { dbConfig };
