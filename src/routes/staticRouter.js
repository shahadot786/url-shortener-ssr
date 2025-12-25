import express from "express";
import { URL } from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  if (!req?.user) return res.redirect("/signin");
  const allUrls = await URL.find({ createdBy: req.user._id }).sort({
    createdAt: -1,
  });
  return res.render("home", {
    urls: allUrls,
    baseUrl: process.env.BASE_URL,
  });
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/signin", async (req, res) => {
  return res.render("signin");
});

export default router;
