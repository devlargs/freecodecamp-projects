import { configureStore } from "@reduxjs/toolkit";

import books from "./reducers/books";
import exercise from "./reducers/exercise";
import issues from "./reducers/issues";

export default configureStore({
  reducer: {
    books,
    exercise,
    issues,
  },
  devTools: true,
});
