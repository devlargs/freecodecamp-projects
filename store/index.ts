import { configureStore } from "@reduxjs/toolkit";

import exerciseUsersReducer from "./reducers/exerciseUserReducer";

export default configureStore({
  reducer: {
    exerciseUser: exerciseUsersReducer,
  },
  devTools: true,
});
