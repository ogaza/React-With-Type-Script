import { ADD_TASK } from "./actions";
import { Action, TasksState } from "./types";

const initialState: TasksState = { tasks: [] };

export function reducer(state = initialState, action: Action) {
  if (action.type === ADD_TASK) {
    return { tasks: [...state.tasks, action.payload] };
  }

  return state;
}
