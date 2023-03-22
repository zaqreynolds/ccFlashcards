import { configureStore } from "@reduxjs/toolkit";
import { topicsReducer } from "../features/topics/TopicSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
