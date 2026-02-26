import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image1:null
  },
  reducers: {
    image1: (state, action) => {
        state.image1 = action.payload
    }
  },
});

export const {image1}  = imageSlice.actions;
export default imageSlice.reducer;
