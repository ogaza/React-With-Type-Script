import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

function createTask(title: string) {
  return {
    id: nanoid(),
    title,
    completed: false,
    assignedTo: "",
  };
}

const initialState = [createTask("task one"), createTask("task two")];

export const fetchTasksThunk = createAsyncThunk(
  "tasks/fetchTasksAsync",
  async function getTaskAsync(taskName) {
    const resultPromise = new Promise((resolve, reject) => {
      resolve(createTask(taskName));
    });

    return await resultPromise;
  },
);

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
