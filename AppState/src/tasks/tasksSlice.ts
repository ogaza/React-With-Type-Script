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
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
  },
});
