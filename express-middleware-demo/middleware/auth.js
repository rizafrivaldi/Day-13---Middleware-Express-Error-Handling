const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token not found! " });
  }

  if (!token || token !== "Rivaldi 12345") {
    return res.status(403).json({
      success: false,
      message: "Token not valid",
    });
  }

  next(); //if token valid, next to route further //
};

module.exports = auth;
