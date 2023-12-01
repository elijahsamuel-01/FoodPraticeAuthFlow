import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Sider } from "./headers/Sider";
import Header from "./headers/Header";

export const Layout = () => {
  // const readToggle = useSelector((state: any) => {
  //   return state.toggle;
  // });
  return (
    <div>
      {/* <Sider /> */}
      <div
      // className="w-full  flex justify-end "
      >
        <div
        // className={`transition-all duration-300 ${
        //   readToggle ? "w-[calc(100%-200px)]" : "w-[calc(100%-70px)]"
        // }  `}
        >
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
