var express = require("express");
var dotenv = require("dotenv");
const { userRouter } = require("./routers/user.router");
const { logger } = require("./middlewares/logger.middleware");
dotenv.config();

var app = express();

let PORT = process.env.PORT || 5001;

// router level middleware
app.use(logger);
app.use(express.json());

app.use("/api/v1/user/", userRouter);

// app.get("/ping", (req, res) => {
//   res.send("Pong!!!!!");
// });

app.listen(PORT, () => {
  console.log(`🚀 Listening to the port ${PORT}`);
});

// http://localhost:5001/api/v1/user/getUsers
