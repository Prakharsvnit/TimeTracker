import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  timer: "",
};

export const contestSlice = createSlice({
  name: "contest",
  initialState,
  reducers: {
    addContest: (state, action) => {
      return {
        ...state,
        contest: [...state.contest, action.payload],
      };
    },
  },
});

export const { addContest } = contestSlice.actions;
export default contestSlice.reducer;

/*
initialState = {}
reducers:
    addContest: return {
        ...state,
        contest:[...state.contest,action.payload],
    }

    
  
   
   todos: [...state.todos, action.payload] //new todos array 
  }
*/
