import express from "express";
import { URL } from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find({}).sort({ createdAt: -1 });
  return res.render("home", {
    urls: allUrls,
  });
});

export default router;
