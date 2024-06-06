import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthPayload } from "../dto/auth.dto";

export const generateSalt = async () => {
  return await bcrypt.genSalt();
};

export const generatePassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};

export const validatePassowrd = async (
  password: string,
  salt: string,
  savedPassword: string
) => {
  return (await generatePassword(password, salt)) === savedPassword;
};

export const generateJwtToken = (payload: AuthPayload): string => {
  const expiresIn = process.env.JWT_TOKEN_EXPIRE;
  const token = jwt.sign(payload, process.env.JWT_TOKEN_SECRET_KEY, {
    expiresIn,
  });
  return token;
};
