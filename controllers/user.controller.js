const { User } = require("../models/user.model");

async function handleGetUser(request, response) {
  try {
    const users = await User.find({});
    response.json({ message: "user fetched!!", data: users });
  } catch (error) {
    response.json({ message: "Error" });
  }
}
async function handleCreateUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User is registered" });
  } catch (error) {
    res.json({ message: "Error", error: error });
  }
}
async function handleGetUserById(request, response) {
  try {
    const user = await User.findById({ _id: request.params.id });
    response.json({ message: "User is registered", data: user });
  } catch (error) {
    response.json({ message: "Error", error: error });
  }
}
module.exports = { handleGetUser, handleCreateUser, handleGetUserById };
