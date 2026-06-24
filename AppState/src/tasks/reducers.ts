import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";

export function add(state, action) {
  state.push(createTask(action.payload));
}

export function assignToUser(state, action) {
  const task = state.find((task) => task.id === action.payload.taskId);
  task.assignedTo = action.payload.userId;
}

export function toggle(state, action) {
  const { payload } = action;
  const task = state.find((task) => {
    return task.id == payload.id;
  });

  if (!task) return;

  task.completed = payload.completed;
}

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchTasksAsync",
  async function getTaskAsync(taskName) {
    const resultPromise = new Promise((resolve) => {
      resolve(createTask(taskName));
    });

    return await resultPromise;
  },
);

export function createTask(title: string) {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: "",
  };
}
