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
});
