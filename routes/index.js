const router = require("express").Router();

const { authentication} = require("../middlewares/auth");
const UserController = require("../controllers/userController");

router.post("/register", UserController.userRrgister)