


import { Link } from "react-router-dom";

const VendorVerify = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" border rounded-md w-[500px] min-h-[200px] bxs">
        <div className="m-4 font-[400] mb-16">Verify Vendor</div>
        <form className="m-3">
          <div className="my-2">
            <input
              className="w-full h-[45px] bg-white  rounded-sm border pl-2"
              placeholder="email"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full bg-white h-[45px] rounded-sm border pl-2"
              placeholder="token"
            />
          </div>

          <button
            className="w-full bg-[rgb(255,108,55)] mt-8 h-[49px] rounded-sm text-white"
            type="submit"
          >
            Verify this Vendor Account
          </button>
          
          <div className="w-full flex justify-center text-[12px] mt-8 ">
            <Link to="/vendorsignin">
              <span className="ml-1 font-bold">Go back to Login here</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorVerify;
