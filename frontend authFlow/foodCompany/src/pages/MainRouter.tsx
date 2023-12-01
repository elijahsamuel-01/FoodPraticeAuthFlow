// import {createBrowserRouter} from "react-router-dom"
// import Layout from "../Components/LayoutHolder/Layout"
// import HomeScreen from "../Pages/HomeScreen"
// import Register from "./AdminAuth/AdminRegister"
// import Login from "./AdminAuth/AdminLogin"
// import Verify from "./AdminAuth/AdminVerify"
// import DLogin from "../Pages/DispatchAuth/DLogin"
// import VendorVerify from "../Pages/VendorAuth/VendorVerify"
// import VLogin from "../Pages/VendorAuth/VLogin"
// import VRegister from "../Pages/VendorAuth/VRegister"
// import UVerify from "../Pages/UserAuth/UVerify"
// import ULogin from "../Pages/UserAuth/ULogin"
// import URegister from "../Pages/UserAuth/URegister"
// import DVerify from "../Pages/DispatchAuth/DVerify"
// import DRegister from "../Pages/DispatchAuth/DRegister"
// import DashLayout from "../Dashboard/DashLayout"
// import DashScreen from "../Dashboard/DashScreen"
// // import PrivateRouter from "./PrivateRoute"

// export const MainRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         children: [
//             {
//                 index: true,
//                 element: <HomeScreen/>
//             }
//         ]
//     },
//     // Admin Auth Route
//     {
//         path: "/adminregister",
//         element: <Register/>
//     },
//     {
//         path: "/adminsignin",
//         element: <Login/>
//     },
//     {
//         path: "/adminverifyscreen",
//         element: <Verify/>
//     },
//     // Dispatch Auth Route
//     {
//         path: "/dispatchregister",
//         element: <DRegister/>
//     },
//     {
//         path: "/dispatchsignin",
//         element: <DLogin/>
//     },
//     {
//         path: "/dispatchverifyscreen",
//         element: <DVerify/>
//     },
//     // User Auth Route
//     {
//         path: "/userregister",
//         element: <URegister/>
//     },
//     {
//         path: "/usersignin",
//         element: <ULogin/>
//     },
//     {
//         path: "/userverifyscreen",
//         element: <UVerify/>
//     },
//     // Vendor Auth Route
//     {
//         path: "/vendorregister",
//         element: <VRegister/>
//     },
//     {
//         path: "/vendorsignin",
//         element: <VLogin/>
//     },
//     {
//         path: "/vendorverifyscreen",
//         element: <VendorVerify/>
//     },
//     // Dashboard Routing
//     {
//         path: "/dashboard",
//         element: <DashLayout/>,
//         children: [
//             {
//                 index: true,
//                 element: <DashScreen />
//             }
//         ]
//     },
// ])
