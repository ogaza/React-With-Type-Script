import { PayloadAction } from "@reduxjs/toolkit";
import { TasksState, ToggleTaskPayload } from "./types";
import { AsyncDataStatus } from "../types";
import { createTask } from "./thunks";

export function add(state: TasksState, action: PayloadAction<string>) {
  state.data.push(createTask(action.payload));
  state.status = "fulfilled";
}

export function toggle(
  state: TasksState,
  action: PayloadAction<ToggleTaskPayload>
) {
  const { payload } = action;
  const task = state.data.find((task) => {
    return task.id == payload.id;
  });

  if (!task) return;

  task.completed = payload.completed;

  state.status = "fulfilled";
}

export function clearAll(state: TasksState) {
  return {
    data: [],
    status: "empty" as AsyncDataStatus,
    queue: [],
  };
}

export function tasksMutationQueuePushReducer(
  state: TasksState,
  action: PayloadAction<string>
) {
  // console.log("tasksMutationQueuePushReducer");
  return state;
}

export function subFlowStartReducer(
  state: TasksState,
  action: PayloadAction<string>
) {
  console.log("sub flow start");
  return state;
}

export function subFlowEndReducer(
  state: TasksState,
  action: PayloadAction<string>
) {
  console.log("sub flow end");
  return state;
}
export function subFlowTwoStartReducer(
  state: TasksState,
  action: PayloadAction<string>
) {
  console.log("sub flow two start");
  return state;
}

export function subFlowTwoEndReducer(
  state: TasksState,
  action: PayloadAction<string>
) {
  console.log("sub flow two end");
  return state;
}
