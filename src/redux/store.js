import { configureStore } from "@reduxjs/toolkit";
import contestReducer from "./actions";

export const store = configureStore({
  reducer: {
    contest: contestReducer,
  },
});
