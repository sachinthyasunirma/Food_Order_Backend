import { CreateVendorInput } from "dto";
import { Request, Response } from "express";
import { generatePassword, generateSalt } from "../helpers/authentication";
import { getVendorByEmail, createVendor } from "../models/vendor.model";

export const registerVendor = async (req: Request, res: Response) => {
  try {
    const {
      name,
      ownerName,
      foodType,
      pincode,
      address,
      phone,
      email,
      password,
    } = <CreateVendorInput>req.body;

    const existingVendor = await getVendorByEmail(email);

    if (existingVendor) {
      return res.json({ message: "A vandor is exist with this email ID" });
    }
    const salt = await generateSalt();
    const generatedPassword = await generatePassword(password, salt);
    const vandor = await createVendor({
      name,
      ownerName,
      foodType,
      pincode,
      address,
      phone,
      email,
      password: generatePassword,
    });
    return res.status(200).json(vandor).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const loginVendor = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
