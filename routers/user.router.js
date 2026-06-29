var express = require("express");
const { ageCheckMiddleware } = require("../middlewares/user.middleware");
const {
  handleGetUser,
  handleCreateUser,
} = require("../controllers/user.controller");

var userRouter = express.Router();

userRouter.get("/getUser", handleGetUser);

userRouter.post("/createUser", handleCreateUser);
module.exports = { userRouter };
