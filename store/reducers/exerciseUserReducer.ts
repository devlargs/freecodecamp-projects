import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      console.log(action);
      return state;
      // state.users = [...action.payload.users];
    },
  },
});

// export const selectCount = (state) => state.counter.value;

export const { getUsers } = exerciseSlice.actions;

export default exerciseSlice.reducer;
