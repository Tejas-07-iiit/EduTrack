import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import compReducer from "./Comp"
import EditAtt from "./Attedit";
import setreload from "./Reload"
import  setimage  from "./Image";

const Store =  configureStore({
  reducer: {
    auth: authReducer,
    comp : compReducer,
    edit : EditAtt,
    reload : setreload,
    image1 : setimage
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false 
    })
});

// console.log(Store)
export default Store;