import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { UsersState, AssignToUserPayload } from "./types";

function createUser(name: string) {
  return {
    id: nanoid(),
    name,
    taskIds: [],
  };
}

const initialState: UsersState = [createUser("user one")];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createUser(action.payload));
    },
  },
  extraReducers: function (builder) {
    builder.addCase<string, PayloadAction<AssignToUserPayload>>(
      "tasks/assignToUser",
      assignToUser,
    );
  },
});

function assignToUser(
  state: UsersState,
  action: PayloadAction<AssignToUserPayload>,
) {
  for (const user of state) {
    if (user.id === action.payload.userId) {
      user.taskIds.push(action.payload.taskId);
    } else {
      user.taskIds = user.taskIds.filter(
        (id: string) => id !== action.payload.taskId,
      );
    }
  }
}
