import express from "express";
import {
  createUser,
  logout,
  signInUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signInUser);
router.get("/logout", logout);

export default router;
