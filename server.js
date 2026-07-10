var express = require("express");
var dotenv = require("dotenv");
const { userRouter } = require("./routers/user.router");
const { logger } = require("./middlewares/logger.middleware");
const { dbConfig } = require("./configurations/db.config");
dotenv.config();

var app = express();

let PORT = process.env.PORT || 5001;

var express = require("express");
var rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 1, // Max 100 requests per IP
  message: {
    error: "Too many requests. Please try again later.",
  },
  standardHeaders: "draft-8", // RateLimit headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// router level middleware
app.use(logger);
app.use(express.json());

app.use("/api/v1/user/", userRouter);

// app.get("/ping", (req, res) => {
//   res.send("Pong!!!!!");
// });

app.listen(PORT, () => {
  dbConfig();
  console.log(`🚀 Listening to the port ${PORT}`);
});

// http://localhost:5001/api/v1/user/getUsers
