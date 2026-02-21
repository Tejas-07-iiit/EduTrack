import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = action.payload.at;
      state.user = action.payload.user;
    }
  },
});

export const {login}  = authSlice.actions;
export default authSlice.reducer;
