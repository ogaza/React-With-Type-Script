import { PayloadAction } from "@reduxjs/toolkit";
import { TasksState, ToggleTaskPayload } from "./types";
import { AsyncDataStatus } from "../types";
import { createTask } from "./thunks";

export function add(state: TasksState, action: PayloadAction<string>) {
  state.data.push(createTask(action.payload));
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
}

export function clearAll(state: TasksState) {
  return {
    data: [],
    status: "empty" as AsyncDataStatus,
  };
}
