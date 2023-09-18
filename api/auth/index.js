const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

const router = express();

router.get("/", (req, res) => {
  return res.status(200).send("handle with care..");
});

router.post(
  "/register",
  [
    body("username", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ success: false, errors });
    }
    try {
      const { username, email, password, isAdmin } = req.body;
      let user = await User.findOne({ $or: [{ username }, { email }] });
      if(user){
        return res.status(400).send({ success: false, msg: "User Already Exists"})
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      user = await User.create({username, email, password: secPass, isAdmin})
      const data = {
        user: {id: user._id}
      }
      const accessToken = jwt.sign(data, process.env.JWT_SECRET)
      return res.status(200).send({ success: true, msg: "You're in..", accessToken });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
