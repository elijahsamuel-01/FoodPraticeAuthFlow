import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "" || null,
};

const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },
    logininUser: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, {}) => {
      state.user = null;
    },
  },
});

export const { changeToggle, logininUser, logOut } = reduxState.actions;

export default reduxState.reducer;
