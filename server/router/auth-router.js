import express from "express";
import { home, login, register,user } from "../controller/auth-controller.js";
import { validate } from "../middlewares/validate-middleware.js";
import { loginSchema, signupSchema } from "../validators/auth-validator.js";
import {authMiddleware} from "../middlewares/auth-middleware.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema),login);
router.route("/user").get(authMiddleware,user);
// router.route("/register").post((req, res) => {
//   res.status(200).send("Register");
// });

export default router;
