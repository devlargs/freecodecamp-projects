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

export const loadIssueByStatus = createAsyncThunk(
  "issues/loadIssueByStatus",
  async (status: string, thunkAPI) => {
    try {
      const url = `/api/issues/kanban?status_text=${status}`;
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
    lists: {},
    category: {
      data: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [loadCategories.fulfilled as any]: (state, action) => {
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
    [loadIssueByStatus.fulfilled as any]: (state, action) => {
      state.lists[action.meta.arg] = {
        ...state.lists[action.meta.arg],
        loading: false,
        data: action.payload.data,
      };
    },
    [loadIssueByStatus.rejected as any]: (state, action) => {
      state.lists[action.meta.arg] = {
        ...state.lists[action.meta.arg],
        loading: false,
        error: action.payload.error,
      };
    },
    [loadIssueByStatus.pending as any]: (state, action) => {
      state.lists[action.meta.arg] = {
        ...state.lists[action.meta.arg],
        loading: true,
      };
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

export const selectIssueByStatus = (id: string) =>
  createSelector(
    (state: any) => {
      const { lists } = state.issues;
      return {
        data: lists[id]?.data || [],
        loading: lists[id]?.loading || false,
        error: lists[id]?.error || null,
      };
    },
    (state) => state
  );

export default issuesSlice.reducer;
