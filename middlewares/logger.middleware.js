let fs = require("fs");
let path = require("path");
function logger(req, res, next) {
  let log_path = path.resolve("logger", "log.txt");
  fs.appendFile(
    log_path,
    `${req.path}--------${new Date().toUTCString()}\n`,
    (err) => {
      if (err) console.log(err);
    },
  );
  next();
}
module.exports = { logger };
