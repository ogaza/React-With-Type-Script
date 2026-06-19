export const ADD = "ADD";
export const INCREMENT = "INCREMENT";

export function increment() {
  return { type: INCREMENT };
}

export function add(number: number) {
  return { type: ADD, payload: number };
}
