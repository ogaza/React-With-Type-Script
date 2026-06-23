import { store } from "./store";
import { addTask } from "./tasks";
import { addUser } from "./users";

const unsubscribe = store.subscribe(handleStoreChanged);

console.log("initial state:", store.getState());

store.dispatch(addTask("task one"));
console.log(store.getState());

store.dispatch(addUser("user one"));

unsubscribe();

function handleStoreChanged() {
  console.log("store changed to: ", store.getState());
}
