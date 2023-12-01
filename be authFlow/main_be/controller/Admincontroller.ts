import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import AdminModel from "../model/AdminModel";

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const generateSalt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, generateSalt);

    const token = crypto.randomBytes(3).toString("hex");

    const Admin = await AdminModel.create({
      name,
      email,
      password: hashedpassword,
      verificationToken: token,
      avatar: name.charAt(0),
    });

    return res.status(201).json({
      message: "Admin data created",
      data: Admin,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
    });
  }
};

export const signInAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getAdmin = await AdminModel.findOne({ email });

    if (getAdmin) {
      const passCheck = await bcrypt.compare(password, getAdmin.password);

      if (passCheck) {
        if (getAdmin.verified && getAdmin.verificationToken == "") {
          const coToken = jwt.sign({ id: getAdmin._id }, "justAlock", {
            expiresIn: "45m",
          });
          return res.status(201).json({
            message: "Admin has successfully sign In",
            data: coToken,
          });
        } else {
          return res.status(404).json({
            message: "Admin hasn't been verify, please verify",
          });
        }
      } else {
        return res.status(404).json({
          message: "please check your password",
        });
      }
    } else {
      return res.status(404).json({
        message: "please check your email very well",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "error",
    });
  }
};

export const VerifyAdmin = async (req: Request, res: Response) => {
  try {
    const { token, email } = req.body;
    const getwithEmail = await AdminModel.findOne({ email });
    const getwithToken = await AdminModel.findOne({ verificationToken: token });

    if (getwithEmail && getwithToken) {
      await AdminModel.findByIdAndUpdate(
        getwithEmail._id,
        {
          verificationToken: "",
          verified: true,
        },
        { new: true }
      );
      return res.status(201).json({
        message: "Admin you can now sign in !! 🚀🚀",
      });
    } else {
      return res.status(404).json({
        message: "something went wrong while verifying...😑",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "error",
    });
  }
};

export const getOneAdmin = async (req: Request, res: Response) => {
  try {
    const { AdminID } = req.params;
    const getAd = await AdminModel.findById(AdminID);

    res.status(201).json({
      message: "Admin has been found and display..!",
      data: getAd,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const getAdmin = async (req: Request, res: Response) => {
  try {
    const getAll = await AdminModel.find();

    res.status(200).json({
      message: "All Admin Data gotten",
      data: getAll,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const updateOneAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { AdminID } = req.params;
    const { name } = req.body;

    const admin = await AdminModel.findByIdAndUpdate(
      AdminID,
      { name },
      { new: true }
    );

    return res.status(201).json({
      message: "user data",
      data: admin,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
