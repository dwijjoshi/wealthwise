import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Assuming your userSlice.js is inside "slices" folder

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
