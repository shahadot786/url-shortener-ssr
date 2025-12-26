import { User } from "../models/user.model.js";
import { setUser } from "../services/auth.service.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({ message: "All fields are required!" });
  }

  //check exists user
  const user = await User.findOne({ email: email });

  if (user?.email === email) {
    return res
      .status(409)
      .json({ message: "A user is already exists with this email." });
  }

  await User.create({ name, email, password });

  return res.redirect("/");
};

export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: "All fields are required!" });
  }

  //check if exists the user
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("signin", { error: "No user found with this email." });
  }

  if (email === user?.email && password === user?.password) {
    const token = setUser(user);
    res.cookie("accessToken", token);
    return res.redirect("/");
  } else {
    return res.render("signin", { error: "Something is not match." });
  }
};

export const logout = async (req, res) => {
  return res.render("signin");
};
