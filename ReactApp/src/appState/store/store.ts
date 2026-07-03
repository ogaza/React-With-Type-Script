import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../tasks";
import { usersSlice } from "../users";
import { menusSlice } from "../menus";

export const store = configureStore({
  reducer: {
    menus: menusSlice.reducer,
    tasks: tasksSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch