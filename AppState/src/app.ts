import { add, store } from "./store";

console.log(store.getState());

store.dispatch(add(2));
console.log(store.getState());