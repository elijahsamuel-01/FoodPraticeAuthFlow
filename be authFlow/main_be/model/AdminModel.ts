import { Document, Schema, model } from "mongoose";

interface iAdmin {
  name: string;
  email: string;
  password: string;
  avatar: string;
  verificationToken: string;
  verified: boolean | any;
}

interface iAdminData extends iAdmin, Document {}

const iOwner = new Schema<iAdminData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verificationToken: {
      type: String,
    },
    avatar: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iAdminData>("AdminData", iOwner);
