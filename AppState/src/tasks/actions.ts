export const ADD_TASK = "ADD_TASK";

export function increment() {
  return { type: ADD_TASK };
}

export function addTask(title: string) {
  return { type: ADD_TASK, payload: { name: title } };
}
