// import { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { changeToggle } from "../../global/reduxState";

export const Sider = () => {
  const dispatch = useDispatch();

  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });
  console.log(readToggle);

  return (
    <div
      className={`fixed transition-all duration-300 border-r h-[100vh] `}
      style={{ width: `${readToggle ? "200px" : "70px"}` }}
    >
      <div className="m-3">
        {readToggle ? (
          <div
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          >
            <FaEnvelopeOpenText size={30} />
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch(changeToggle(true));
            }}
          >
            <AiOutlineClose size={30} />
          </div>
        )}
      </div>
      <div>
        <div className="text-[45px] font-bold w-full text-center "> Logo</div>
      </div>
    </div>
  );
};
