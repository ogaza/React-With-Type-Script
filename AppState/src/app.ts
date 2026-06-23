import { usersSlice } from "./users";
import { store } from "./store";

const unsubscribe = store.subscribe(handleStoreChanged);

console.log("initial state:", store.getState());

store.dispatch(usersSlice.actions.add("user two"));

unsubscribe();

function handleStoreChanged() {
  console.log("store changed to: ", store.getState());
}
