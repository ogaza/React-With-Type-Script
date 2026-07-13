import { createSlice } from "@reduxjs/toolkit";
import {
  add,
  clearAll,
  toggle,
  pushFlowStartAction
} from "./reducers";
import { TasksState } from "./types";
import { fetchTasksThunk } from "./thunks";

const initialState: TasksState = { data: [], status: "empty", queue: [] };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add,
    clearAll,
    toggle,
    tasksMutationQueuePushFlowStartAction: pushFlowStartAction
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.pending, (state, action) => {
        return { data: [], status: "pending", queue: [] };
      })
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        return { data: action.payload, status: "fulfilled", queue: [] };
      });
  },
});

export const { tasksMutationQueuePushFlowStartAction } = tasksSlice.actions;
