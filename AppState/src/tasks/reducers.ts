import { createAsyncThunk, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {
  AssignToUserPayload,
  Task,
  TasksState,
  ToggleTaskPayload,
} from "./types";

export function add(state: TasksState, action: PayloadAction<string>) {
  state.push(createTask(action.payload));
}

export function assignToUser(
  state: TasksState,
  action: PayloadAction<AssignToUserPayload>,
) {
  const task = state.find((task: Task) => task.id === action.payload.taskId);
  if (!task) return;

  task.assignedTo = action.payload.userId;
}

export function toggle(
  state: TasksState,
  action: PayloadAction<ToggleTaskPayload>,
) {
  const { payload } = action;
  const task = state.find((task) => {
    return task.id == payload.id;
  });

  if (!task) return;

  task.completed = payload.completed;
}

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchTasksAsync",
  async function getTaskAsync(taskName: string): Promise<Task> {
    const resultPromise: Promise<Task> = new Promise((resolve) => {
      resolve(createTask(taskName));
    });

    return await resultPromise;
  },
);

export function createTask(title: string): Task {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: "",
  };
}
