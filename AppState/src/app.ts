import { usersSlice } from "./users";
import { tasksSlice } from "./tasks";
import { store } from "./store";

const unsubscribe = store.subscribe(handleStoreChanged);

console.log("initial state:", store.getState());

store.dispatch(usersSlice.actions.add("user two"));
store.dispatch(tasksSlice.actions.add("task three"));

const userId = store.getState().users[0].id;
const taskId = store.getState().tasks[0].id;

store.dispatch(tasksSlice.actions.assignToUser({ taskId, userId }));

store.dispatch(tasksSlice.actions.toggle({ id: taskId, completed: true }));

unsubscribe();

function handleStoreChanged() {
  console.log("store changed to: ", store.getState());
}
