import { createSlice } from "@reduxjs/toolkit";
import {
  add,
  clearAll,
  toggle,
  tasksMutationQueuePushReducer,
  subFlowStartReducer,
  subFlowEndReducer,
  subFlowTwoStartReducer,
  subFlowTwoEndReducer,
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
    tasksMutationQueuePushFlowStartAction: tasksMutationQueuePushReducer,
    subFlowStartAction: subFlowStartReducer,
    subFlowEndAction: subFlowEndReducer,
    subFlowTwoStartAction: subFlowTwoStartReducer,
    subFlowTwoEndAction: subFlowTwoEndReducer,
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

export const {
  tasksMutationQueuePushFlowStartAction,
  subFlowStartAction,
  subFlowEndAction,
  subFlowTwoStartAction,
  subFlowTwoEndAction
} = tasksSlice.actions;
