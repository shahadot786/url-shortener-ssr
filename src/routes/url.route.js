import express from "express";
import {
  getAllUrls,
  getAnalytics,
  getShortId,
  handleGenerateNewShortUrl,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/url", handleGenerateNewShortUrl);
router.get("/url", getAllUrls);
router.get("/url/:shortId", getShortId);
router.get("/url/analytics/:shortId", getAnalytics);

export default router;
