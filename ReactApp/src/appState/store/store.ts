import { configureStore } from "@reduxjs/toolkit";
import { dialogsSlice } from "../dialogs";
import { menusSlice } from "../menus";
import { tasksSlice } from "../tasks";
import { usersSlice } from "../users";

export const store = configureStore({
  reducer: {
    dialogs: dialogsSlice.reducer,
    menus: menusSlice.reducer,
    tasks: tasksSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch