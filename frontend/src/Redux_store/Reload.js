import { createSlice } from "@reduxjs/toolkit";

const reloadslice = createSlice({
  name: "reload",
  initialState: {
    reload: false
  },
  reducers: {
    reload : (state, action) => {
      state.reload = action.payload;
    }
  },
});

export const {reload}  = reloadslice.actions;
export default reloadslice.reducer;