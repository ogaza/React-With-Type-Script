import {
  registerHostCallbacks
} from "./bootstrapping";
import { registerObservables } from "./observables";
import {
  store,
  storeDispatch,
} from "./reduxStore";
import {
  tasksSlice,
} from "./reduxStore/tasks";
import { RxState } from "./rxState";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");

  runWithRxSubscriptions();
}

function runWithRxSubscriptions() {
  registerHostCallbacks();
  registerObservables();

  // subscribe to the appStatus change
  RxState.Instance.tasks.subscriptions.appStatus.subject.subscribe(
    handleAppStatusChanged
  );

  storeDispatch("", tasksSlice.actions.add("a new task"));

  const [task] = store.getState().tasks.data;
  storeDispatch(
    "",
    tasksSlice.actions.toggle({ id: task.id, completed: true })
  );
}

function handleAppStatusChanged(appStatus: any) {
  console.log("posStstus changed to: ", appStatus);
}
