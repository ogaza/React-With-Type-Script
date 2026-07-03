import { createSlice } from "@reduxjs/toolkit";
import {
  add,
  assignToUser,
  clearAll,
  fetchTasksThunk,
  toggle,
} from "./reducers";
import { TasksState } from "./types";

const initialState: TasksState = { data: [], status: "empty" };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add,
    clearAll,
    toggle,
    assignToUser,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state, action) => {
        return { data: [], status: "pending" };
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        return { data: action.payload, status: "fulfilled" };
      });
  },
});
