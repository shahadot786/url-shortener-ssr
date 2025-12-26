import jwt from "jsonwebtoken";

const secret = "shahadot@786";

export const setUser = (user) => {
  return jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    secret
  );
};

export const getUser = (token) => {
  if (!token) return null;
  return jwt.verify(token, secret);
};
