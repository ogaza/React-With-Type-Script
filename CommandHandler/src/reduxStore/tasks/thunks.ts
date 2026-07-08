import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { Task } from "./types";

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchTasksAsync",
  async function getTaskAsync(): Promise<Task[]> {
    return await getTasksFromApiMock();
  }
);

function getTasksFromApiMock(): Promise<Task[]> {
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
  };
}

export type TaskResolver = (value: Task[] | PromiseLike<Task[]>) => void;
