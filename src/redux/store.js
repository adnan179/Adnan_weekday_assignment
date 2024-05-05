import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slice/jobs";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
