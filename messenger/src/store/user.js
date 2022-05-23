import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  userName: "",
  profileImg: "",
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;
export const userSelector = (state) => state.userSlice;
export default userSlice;
