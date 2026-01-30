import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";

const Store =  configureStore({
  reducer: {
    auth: authReducer,
  },
});

// console.log(Store)
export default Store;
