import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const contestSlice = createSlice({
  name: "contest",
  initialState,
  reducers: {
    addContest: (state, action) => {
      state.push(Object.assign({}, action.payload));
    },
  },
});

export const { addContest } = contestSlice.actions;
export default contestSlice.reducer;
