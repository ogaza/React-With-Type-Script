import { registerHostCallbacks, registerObservables } from "./bootstrapping";
import { BasketsMutationFlow } from "./flows";
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

  const action = {};
  const flow = new BasketsMutationFlow();
  flow.runFlow(action);
}

function handlePosStatusChanged(posStatus: any) {
  console.log("posStstus changed to: ", posStatus);
}
