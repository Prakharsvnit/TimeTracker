import { configureStore } from "@reduxjs/toolkit";
import {
  updateTimeDuration,
  updateTaskTitle,
  updateTaskDescription,
} from "./contestSlice";

export default configureStore({
  reducer: {
    updateTimeDuration,
    updateTaskTitle,
    updateTaskDescription,
  },
});
