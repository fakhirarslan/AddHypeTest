const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate user input
  if (!(email && password && name)) {
    return res.status(400).json({ error: "All input is required" });
  }

  // check if user already exist
  // Validate if user exist in our database
  const oldUser = await UserModel.findOne({ email });
  if (oldUser) {
    return res.status(500).json({ error: "User Already Exist. Please Login" });
  }

  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);

  // Create user in our database
  const user = await UserModel.create({
    name,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    password: encryptedPassword,
  });

  // Create token
  const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });

  // save user token
  user.token = token;

  // return new user
  return user;
};

exports.login = async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(500).json({ error: "All input is required" });
    }

    // Validate if user exist in our database
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      return user;
    }
    res.status(400).json({ error: "Invalid Credentials" });
  } catch (err) {
    console.log(err);
  }
};
