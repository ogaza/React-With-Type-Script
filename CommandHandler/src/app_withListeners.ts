import {
  registerHostCallbacks
} from "./bootstrapping";
import { EventEmitter } from "./events";
import { TasksMutationFlow } from "./flows";
import { registerObservables } from "./observables";
import {
  listenerMiddleware,
  registerListener,
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
  // this change will be made
  // in the baskestMutationFlow actually
  RxState.Instance.tasks.subscriptions.appStatus.subject.subscribe(
    handleAppStatusChanged
  );

  registerListener(
    listenerMiddleware,
    tasksSlice.actions.add,
    (action: any, listenerApi: any) => {
      console.log("running side effect to the action: ", action);
      const flow = new TasksMutationFlow(
        listenerMiddleware,
        new EventEmitter()
      );
      flow.runFlow(action);
    }
  );

  storeDispatch("", tasksSlice.actions.add("a new task"));
}

function handleAppStatusChanged(appStatus: any) {
  console.log("posStstus changed to: ", appStatus);
}
