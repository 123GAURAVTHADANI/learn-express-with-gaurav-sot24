function ageCheckMiddleware(req, res, next) {
  let age = req.query.age;
  if (!(age >= 18)) {
    return res.json({ message: "You are underage" });
  }
  next();
}

module.exports = { ageCheckMiddleware };
