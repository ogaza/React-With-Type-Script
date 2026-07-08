import { createSlice } from "@reduxjs/toolkit";
import { add, clearAll, toggle } from "./reducers";
import { TasksState } from "./types";
import { fetchTasksThunk } from "./thunks";

const initialState: TasksState = { data: [], status: "empty" };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add,
    clearAll,
    toggle,
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
