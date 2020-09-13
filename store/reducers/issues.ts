import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk(
  "issues/loadCategories",
  async (_, thunkAPI) => {
    try {
      const url = "/api/issues/kanban/status";
      const response = await fetch(url);

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const issuesSlice = createSlice({
  name: "issues",
  initialState: {
    category: {
      data: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [loadCategories.fulfilled as any]: (state, action) => {
      console.log(action);
      state.category.data = action.payload.data;
      state.category.loading = false;
    },
    [loadCategories.rejected as any]: (state, action) => {
      state.category.error = action.payload.error;
      state.category.loading = false;
    },
    [loadCategories.pending as any]: (state) => {
      state.category.loading = true;
    },
  },
});

export const selectCategories = createSelector(
  (state: any) => {
    const { data, loading, error } = state.issues.category;
    return {
      data,
      loading,
      error,
    };
  },
  (state) => state
);

export default issuesSlice.reducer;
