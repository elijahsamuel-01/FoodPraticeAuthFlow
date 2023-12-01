import axios from "axios";

const URL: string = "http://localhost:4001/api/v1/vendor";
export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-vendor`, data).then((res: any) => {
      // console.log(user);
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAccount = async (data: any) => {
  try {
    return await axios.patch(`${URL}/verify-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const signInAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/verify-vendor`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
