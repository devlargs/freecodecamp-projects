import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

export const loadBooks = createAsyncThunk(
  "books/loadBooks",
  async (_, thunkAPI) => {
    try {
      const url = "/api/books";
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const loadBookById = createAsyncThunk(
  "books/loadBookById",
  async (id: { id: string }, thunkAPI) => {
    try {
      const url = `/api/books/${id}`;
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    comments: {
      data: [],
      loading: false,
      error: null,
    },
    currentBook: null,
    books: {
      data: [],
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: {
    [loadBooks.pending as any]: (state) => {
      state.books.loading = true;
    },
    [loadBooks.fulfilled as any]: (state: any, action) => {
      state.books.data = action.payload.data;
      state.books.loading = false;
    },
    [loadBooks.rejected as any]: (state: any, action) => {
      state.books.error = action.payload.error;
      state.books.loading = false;
    },
    [loadBookById.pending as any]: (state) => {
      state.comments.loading = true;
    },
    [loadBookById.fulfilled as any]: (state: any, action) => {
      state.comments.data = action.payload.data[0];
      state.currentBook = action.meta.arg;
      state.comments.loading = false;
    },
    [loadBookById.rejected as any]: (state: any, action) => {
      state.comments.error = action.payload.error;
      state.comments.loading = false;
    },
  },
});

export const selectBooks = createSelector(
  (state: any) => {
    const { data, loading, error } = state.books.books;
    return {
      data,
      loading,
      error,
    };
  },
  (state) => state
);

export const selectComments = createSelector(
  (state: any) => {
    const { data, loading, error } = state.books.comments;
    return {
      data,
      loading,
      error,
      currentBook: state.books.currentBook,
    };
  },
  (state) => state
);

export default bookSlice.reducer;
