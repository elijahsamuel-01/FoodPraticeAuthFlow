import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Layout } from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import DashLayout from "../Dashboard/DashLayout";
import VendorVerify from "../pages/VendorAuth/VendorVerify";
import VLogin from "../pages/VendorAuth/VLogin";
import VRegister from "../pages/VendorAuth/VRegister";
import UVerify from "../pages/UserAuth/UVerify";
import ULogin from "../pages/UserAuth/ULogin";
import URegister from "../pages/UserAuth/URegister";
import DVerify from "../pages/DispatchAuth/DVerify";
import DLogin from "../pages/DispatchAuth/DLogin";
import DRegister from "../pages/DispatchAuth/DRegister";
import DashScreen from "../Dashboard/DashScreen";
import AdminVerify from "../pages/AdminAuth/AdminVerify";
import AdminLogin from "../pages/AdminAuth/AdminLogin";
import AdminRegister from "../pages/AdminAuth/AdminRegister";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [{ index: true, element: <HomeScreen /> }],
  },
  {
    path: "/adminregister",
    element: <AdminRegister />,
  },
  {
    path: "/adminsignin",
    element: <AdminLogin />,
  },
  {
    path: "/adminverifyscreen",
    element: <AdminVerify />,
  },
  // Dispatch Auth Route
  {
    path: "/dispatchregister",
    element: <DRegister />,
  },
  {
    path: "/dispatchsignin",
    element: <DLogin />,
  },
  {
    path: "/dispatchverifyscreen",
    element: <DVerify />,
  },
  // User Auth Route
  {
    path: "/userregister",
    element: <URegister />,
  },
  {
    path: "/usersignin",
    element: <ULogin />,
  },
  {
    path: "/userverifyscreen",
    element: <UVerify />,
  },
  // Vendor Auth Route
  {
    path: "/vendorregister",
    element: <VRegister />,
  },
  {
    path: "/vendorsignin",
    element: <VLogin />,
  },
  {
    path: "/vendorverifyscreen",
    element: <VendorVerify />,
  },
  // Dashboard Routing
  {
    path: "/dashboard",
    element: <DashLayout />,
    children: [
      {
        index: true,
        element: <DashScreen />,
      },
    ],
  },
]);
