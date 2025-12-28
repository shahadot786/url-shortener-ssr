import { nanoid } from "nanoid";
import { URL } from "../models/url.model.js";

export const handleGenerateNewShortUrl = async (req, res) => {
  const body = req.body;

  if (!body?.url)
    return res
      .status(400)
      .json({ status: "Failure", message: "Url is required" });

  const shortID = nanoid(10);
  const url = body.url;

  await URL.create({
    shortId: shortID,
    redirectUrl: url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
    baseUrl: process.env.BASE_URL,
    name: req.user.name,
    email: req.user.email,
  });
};

export const getShortId = async (req, res) => {
  try {
    const { shortId } = req.params;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(entry.redirectUrl);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUrls = async (req, res) => {
  const data = await URL.find({});

  return res
    .status(200)
    .json({ success: true, message: "Data get successfully.", data: data });
};

export const getAnalytics = async (req, res) => {
  const { shortId } = req.params;

  if (!shortId) {
    return res.status(400).json({ message: "ID Is required!" });
  }

  const result = await URL.findOne({ shortId });
  if (!result) {
    return res.status(404).json({ error: "Data not found" });
  }

  return res.status(200).json({
    status: "Success",
    data: {
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    },
  });
};

export const deleteUrl = async (req, res) => {
  const { id } = req.params;
  const deletedUrl = await URL.findByIdAndDelete(id);

  if (!deletedUrl) {
    return res.status(404).json({
      success: false,
      message: "URL not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "URL deleted successfully",
  });
};
