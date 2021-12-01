const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  postUser,
} = require("../controller/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/",postUser);


module.exports = router;
