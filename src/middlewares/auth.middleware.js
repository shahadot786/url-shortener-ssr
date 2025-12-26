import { getUser } from "../services/auth.service.js";

export const authRestriction = async (req, res, next) => {
  const userId = req?.cookies?.uid;

  if (!userId) return res.redirect("/signin");

  const user = getUser(userId);

  if (!user) return res.redirect("/signin");

  req.user = user;
  next();
};

export const checkAuth = async (req, res, next) => {
  const userId = req?.cookies?.accessToken;
  const user = getUser(userId);
  req.user = user;
  next();
};
