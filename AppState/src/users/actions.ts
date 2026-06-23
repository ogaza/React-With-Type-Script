export const ADD_USER = "ADD_USER";

export function increment() {
  return { type: ADD_USER };
}

export function addUser(name: string) {
  return { type: ADD_USER, payload: { name } };
}
