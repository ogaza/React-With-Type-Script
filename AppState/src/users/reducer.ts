import { ADD_USER } from "./actions";
import { Action, UsersState } from "./types";

const initialState: UsersState = { users: [] };

export function reducer(state = initialState, action: Action) {
  if (action.type === ADD_USER) {
    return { users: [...state.users, action.payload] };
  }

  return state;
}
