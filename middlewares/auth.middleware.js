const auth = (req, res, next) => {
  let user = req.cookies;
  if (user) {
    next();
  } else {
    res.send("You are not logged in");
  }
};

module.exports= auth