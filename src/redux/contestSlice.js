import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeDuration: "",
  title: "",
  description: "",
};

const contestSlice = createSlice({
  name: "contest",
  initialState,
  reducers: {
    updateTimeDuration: (state, action) => {
      state.timeDuration = action.payload;
    },
    updateTaskTitle: (state, action) => {
      state.title = action.payload;
    },
    updateTaskDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { updateTimeDuration, updateTaskTitle, updateTaskDescription } =
  contestSlice.actions;
export default contestSlice.reducer;
