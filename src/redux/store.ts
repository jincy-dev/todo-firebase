import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./slices/name";

const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
