const userService = require("../services/UserService");

exports.register = async (req, res) => {
  try {
    const user = await userService.register(req, res);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await userService.login(req, res);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
