const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("./utils/generateToken");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

require("./controller/auth")(app);
require("./controller/noAuth")(app);

app.use("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Invalid password" });

    user.password = undefined;

    return res.json({ user, token: generateToken({ id: user._id }) });
  } catch (error) {
    res.status(400).send({ error: "Authentication failed" + error });
  }
});
module.exports = app;
