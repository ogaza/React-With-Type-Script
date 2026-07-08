import { registerHostCallbacks, registerObservables } from "./bootstrapping";
import { BasketsMutationFlow } from "./flows";
import {
  listenerMiddleware,
  registerListener,
  store,
  storeDispatch,
} from "./reduxStore";
import { tasksSlice } from "./reduxStore/tasks";
import { RxState } from "./RxState";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");

  runWithRxSubscriptions();
}

function runWithRxSubscriptions() {
  registerHostCallbacks();
  registerObservables();

  // subscribe to the posStatus change
  // this change will be made
  // in the baskestMutationFlow actually
  RxState.Instance.baskets.subscriptions.posStatus.subject.subscribe(
    handlePosStatusChanged
  );

  registerListener(
    listenerMiddleware,
    tasksSlice.actions.add,
    (action: any, listenerApi: any) => {
      console.log("running side effect to the action: ", action);
      const flow = new BasketsMutationFlow();
      flow.runFlow(action);
    }
  );
  registerListener(
    listenerMiddleware,
    tasksSlice.actions.toggle,
    (action: any, listenerApi: any) => {
      console.log("running side effect to the action: ", action);
    }
  );

  storeDispatch("", tasksSlice.actions.add("a new task"));

  const [task] = store.getState().tasks.data;
  storeDispatch(
    "",
    tasksSlice.actions.toggle({ id: task.id, completed: true })
  );
}

function handlePosStatusChanged(posStatus: any) {
  console.log("posStstus changed to: ", posStatus);
}
