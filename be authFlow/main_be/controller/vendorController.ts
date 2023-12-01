import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import vendorModel from "../model/vendorModel";
import jwt from "jsonwebtoken";

export const createVendor = async (req: Request, res: Response) => {
  try {
    const { Name, email, password, address } = req.body;

    const generateSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, generateSalt);

    const token = crypto.randomBytes(3).toString("hex");

    const user = await vendorModel.create({
      Name,
      email,
      address,
      password: hashed,
      verificationToken: token,
      avatar: Name.charAt(0),
    });

    return res.status(201).json({
      message: "Vendor Profile Created",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      // data: error.message,
    });
  }
};

export const signInVendor = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getVendor: any = await vendorModel.findOne({ email });

    if (getVendor) {
      const passChecker = await bcrypt.compare(password, getVendor.password);

      if (passChecker) {
        if (getVendor.verified && getVendor.verificationToken === "") {
          const webToken = jwt.sign({ id: getVendor._id }, "justASafe", {
            expiresIn: "2d",
          });
          return res.status(201).json({
            message: "Vendor Signed In",
            data: webToken,
          });
        } else {
          return res.status(404).json({
            message: "Your Account hasn't been verified",
          });
        }
      } else {
        return res.status(404).json({
          message: "Please Check Your Password",
        });
      }
    } else {
      return res.status(404).json({
        message: "Please Check your mail",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const verifyVendor = async (req: Request, res: Response) => {
  try {
    const { token, email } = req.body;

    const getWithEmail = await vendorModel.findOne({ email });
    const getWithToken = await vendorModel.findOne({
      verificationToken: token,
    });

    if (getWithEmail && getWithToken) {
      await vendorModel.findByIdAndUpdate(
        getWithEmail._id,
        {
          verificationToken: "",
          verified: true,
        },
        { new: true }
      );

      return res.status(201).json({
        message: "Vendor Vrified.... You can sign in",
      });
    } else {
      return res.status(404).json({
        message: "Something Went Wrong",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
