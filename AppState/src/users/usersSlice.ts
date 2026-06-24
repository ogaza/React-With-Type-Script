import { createSlice, nanoid } from "@reduxjs/toolkit";

function createUser(name: string) {
  return {
    id: nanoid(),
    name,
    taskIds: [],
  };
}

const initialState = [createUser("user one")];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createUser(action.payload));
    },
  },
  extraReducers: function (builder) {
    builder.addCase("tasks/assignToUser", assignToUser);
  },
});

function assignToUser(state, action) {
  for (const user of state) {
    if (user.id === action.payload.userId) {
      user.taskIds.push(action.payload.taskId);
    } else {
      user.taskIds = user.taskIds.filter((id) => id !== action.payload.taskId);
    }
  }
}
