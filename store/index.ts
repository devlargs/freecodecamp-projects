import { configureStore } from "@reduxjs/toolkit";

import exerciseReducer from "./reducers/exercise";
import issuesReducer from "./reducers/issues";

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
    issues: issuesReducer,
  },
  devTools: true,
});
