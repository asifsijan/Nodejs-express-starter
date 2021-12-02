const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  login,
  register,
  
} = require("../controller/authController");

router.post("/login", login);
router.post("/register", register);



router.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});


module.exports = router;
