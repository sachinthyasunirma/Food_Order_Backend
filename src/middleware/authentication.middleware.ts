import { AuthPayload } from "../dto/auth.dto";
import express from "express";
import jwt from "jsonwebtoken";
import { get, identity, merge } from "lodash";

export const jwtMiddleware = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const payload = (await jwt.verify(
      token,
      process.env.JWT_TOKEN_SECRET_KEY
    )) as AuthPayload;
    merge(req, { identity: payload });
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
