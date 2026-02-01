import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import compReducer from "./Comp"

const Store =  configureStore({
  reducer: {
    auth: authReducer,
    comp : compReducer
  },
});

// console.log(Store)
export default Store;
