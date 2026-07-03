import { createAsyncThunk, nanoid, PayloadAction } from "@reduxjs/toolkit";
import {
  AssignToUserPayload,
  Task,
  TasksState,
  ToggleTaskPayload,
} from "./types";
import { AsyncDataStatus } from "../types";

export function add(state: TasksState, action: PayloadAction<string>) {
  state.data.push(createTask(action.payload));
}

export function assignToUser(
  state: TasksState,
  action: PayloadAction<AssignToUserPayload>,
) {
  const task = state.data.find(
    (task: Task) => task.id === action.payload.taskId,
  );
  if (!task) return;

  task.assignedTo = action.payload.userId;
}

export function toggle(
  state: TasksState,
  action: PayloadAction<ToggleTaskPayload>,
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

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchTasksAsync",
  async function getTaskAsync(): Promise<Task[]> {
    return await getTasksFromApiMock();
  },
);

export function getTasksFromApiMock(): Promise<Task[]> {
  return new Promise(taksPromiseExecutor);
}

function taksPromiseExecutor(resolve: TaskResolver) {
  setTimeout(function resolveTasks() {
    resolve([createTask("task one"), createTask("task two")]);
  }, 2000);
}

export function createTask(title: string): Task {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: "",
  };
}

export type TaskResolver = (value: Task[] | PromiseLike<Task[]>) => void;
