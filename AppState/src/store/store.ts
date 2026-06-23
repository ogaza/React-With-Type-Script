import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../tasks";
import { usersSlice } from "../users";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    users: usersSlice.reducer,
  },
});