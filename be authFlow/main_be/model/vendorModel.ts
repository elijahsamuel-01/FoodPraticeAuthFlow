import { Document, Schema, model } from "mongoose";

interface iVendor {
  Name: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  verifictionToken: string;
  verified: boolean;
}

interface iVendorData extends iVendor, Document {}

const vendorModel = new Schema<iVendorData>(
  {
    Name: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: { type: String },
    address: { type: String },
    verifictionToken: { type: String, unique: true },
    verified: { type: Boolean },
  },
  { timestamps: true }
);

export default model<iVendorData>("vendor", vendorModel);
