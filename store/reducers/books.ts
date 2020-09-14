import { message } from "antd";
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

export const deleteBookById = createAsyncThunk(
  "books/deleteBookById",
  async (id: { id: string }, thunkAPI) => {
    try {
      const url = `/api/books/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addComment = createAsyncThunk(
  "books/addComment",
  async ({ id, text }: { id: string; text: string }, thunkAPI) => {
    try {
      const url = `/api/books/${id}`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (title: string, thunkAPI) => {
    try {
      const url = `/api/books`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
    [addComment.pending as any]: (state) => {
      state.comments.loading = true;
    },
    [addComment.fulfilled as any]: (state: any, action) => {
      state.comments.data.comments = [
        ...state.comments.data.comments,
        action.payload.data,
      ];
      const count = state.comments.data.comments.length;
      state.comments.data.commentcount = count;
      state.comments.loading = false;
      state.books.data = state.books.data.map((q) => {
        if (q._id === action.meta.arg.id) {
          return {
            ...q,
            commentcount: count,
          };
        }
        return q;
      });
    },
    [addComment.rejected as any]: (state: any, action) => {
      state.comments.error = action.payload.error;
      state.comments.loading = false;
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
    [deleteBookById.pending as any]: (state) => {
      state.comments.loading = true;
    },
    [deleteBookById.fulfilled as any]: (state: any, action) => {
      state.comments.data = [];
      state.currentBook = null;
      state.comments.loading = false;
      state.books.data = state.books.data.filter(
        (q) => action.meta.arg !== q._id
      );
      message.success("Succesfully deleted book");
    },
    [deleteBookById.rejected as any]: (state: any, action) => {
      state.comments.error = action.payload.error;
      state.comments.loading = false;
      message.error("Delete book failed");
    },
    [addBook.pending as any]: (state) => {
      state.books.loading = true;
    },
    [addBook.fulfilled as any]: (state: any, action) => {
      state.books.data = [...state.books.data, action.payload];
      state.books.loading = false;
      message.success("Book created successfully");
    },
    [addBook.rejected as any]: (state: any, action) => {
      state.books.error = action.payload.error;
      state.books.loading = false;
      message.error("Add book failed");
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
