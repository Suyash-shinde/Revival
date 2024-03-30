import { Router } from "express";
import { register,login, logout, refreshAccessTokens } from "../controllers/user.controllers.js";
import { checkToken } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(checkToken,logout);
router.route("/refresh").post(refreshAccessTokens);
export default router;