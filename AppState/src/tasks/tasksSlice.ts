import { createSlice, nanoid } from "@reduxjs/toolkit";

function createTask(title: string) {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: "",
  };
}

const initialState = [createTask("task one"), createTask("task two")];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add,
    toggle,
    assignToUser,
  },
});

function add(state, action) {
  state.push(createTask(action.payload));
}

function toggle(state, action) {
  const { payload } = action;
  const task = state.find((task) => {
    return task.id == payload.id;
  });

  if (!task) return;

  task.completed = payload.completed;
}

function assignToUser(state, action) {
  const task = state.find((task) => task.id === action.payload.taskId);
  task.assignedTo = action.payload.userId;
}
