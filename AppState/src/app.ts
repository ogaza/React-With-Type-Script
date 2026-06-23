import { add, store } from "./store";

const unsubscribe = store.subscribe(handleStoreChanged);

console.log(store.getState());

store.dispatch(add(2));
console.log(store.getState());

unsubscribe();

function handleStoreChanged() {
  console.log("store changed to: ", store.getState());
  // console.log("store changed to: ", store.getState().value);
}
