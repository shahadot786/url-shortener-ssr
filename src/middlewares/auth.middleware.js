import { getUser } from "../services/auth.service.js";

export const authRestriction = async (req, res, next) => {
  const token = req?.cookies?.accessToken;

  if (!token) return res.redirect("/signin");

  const user = getUser(token);

  if (!user) return res.redirect("/signin");

  req.user = user;
  next();
};

export const checkAuth = async (req, res, next) => {
  const token = req?.cookies?.accessToken;
  const user = getUser(token);
  req.user = user;
  next();
};
