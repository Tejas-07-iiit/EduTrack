import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    }
  },
});

export const {login}  = authSlice.actions;
export default authSlice.reducer;
