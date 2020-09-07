import { configureStore } from "@reduxjs/toolkit";

import exerciseReducer from "./reducers/exercise";

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
  devTools: true,
});
