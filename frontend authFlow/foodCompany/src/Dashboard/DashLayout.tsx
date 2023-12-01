import { Outlet } from "react-router-dom";
import { Sider } from "../components/headers/Sider";
import { useSelector } from "react-redux";
import DashScreen from "./DashScreen";

const DashLayout = () => {
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });
  return (
    <div>
      <Sider />
      <div className="w-full  flex justify-end ">
        <div
          className={`transition-all duration-300 ${
            readToggle ? "w-[calc(100%-200px)]" : "w-[calc(100%-70px)]"
          }  `}
        >
          <DashScreen />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
