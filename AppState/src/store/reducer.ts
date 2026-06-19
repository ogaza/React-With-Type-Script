import { ADD, INCREMENT } from "./actions";
import { Action, ApplicationState } from "./types";

const initialState: ApplicationState = { value: 0 };

export function reducer(state = initialState, action: Action) {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }

  return state;
}
