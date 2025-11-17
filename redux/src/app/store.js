import { configureStore } from "@reduxjs/toolkit";
import userInfo from "../slices/userSlice";

const store = configureStore({
  reducer: userInfo,
});

export default store;
