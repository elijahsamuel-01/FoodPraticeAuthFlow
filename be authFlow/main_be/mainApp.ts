import { Application, Request, Response } from "express";
import user from "./route/userRoute";
import vendor from "./route/vendorRouter";
import admin from "./route/Adminroute";
export const mainApp = (app: Application) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/vendor", vendor);
  app.use("/api/v1/admin", admin);
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to the our Bank API",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
