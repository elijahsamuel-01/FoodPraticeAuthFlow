import React from "react";
import userHook from "../hook/userHook";

const DashScreen = () => {
  const { data }: any = userHook();
  console.log(" This i the name", data?.name);

  return (
    <div>
      <div>Welcome {data?.name}</div>
    </div>
  );
};

export default DashScreen;
