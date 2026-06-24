import { createSlice } from "@reduxjs/toolkit";
import {
  add,
  assignToUser,
  createTask,
  fetchTasksThunk,
  toggle,
} from "./reducers";

const initialState = [createTask("task one"), createTask("task two")];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add,
    toggle,
    assignToUser,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});
