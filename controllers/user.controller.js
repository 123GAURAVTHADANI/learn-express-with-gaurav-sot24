function handleGetUser(request, response) {
  response.send("Users ....!!!");
}
function handleCreateUser(req, res) {
  console.log(req.body);
  return res.json({ message: "User is created!!" });
}
module.exports = { handleGetUser, handleCreateUser };
