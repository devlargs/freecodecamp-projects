import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import projectUrls from "constants/projectUrls";

export const loadExercise = createAsyncThunk(
  "exercise/loadExercise",
  async (_, thunkAPI) => {
    try {
      const url = projectUrls.EXERCISE_TRACKER.examples[0].url;
      const response = await fetch(url);

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: {
    users: [],
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [loadExercise.fulfilled as any]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [loadExercise.pending as any]: (state) => {
      state.loading = true;
    },
    [loadExercise.rejected as any]: (state) => {
      state.loading = false;
      state.users = [];
    },
  },
});

export const selectUsers = createSelector(
  (state: any) => ({
    users: state.exercise.users,
    loading: state.exercise.loading,
    error: state.exercise.error,
  }),
  (state) => state
);

export default exerciseSlice.reducer;
