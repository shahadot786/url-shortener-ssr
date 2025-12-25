import express from "express";
import {
  deleteUrl,
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
router.delete("/url/:id", deleteUrl);

export default router;
