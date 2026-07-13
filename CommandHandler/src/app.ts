import {
  baseBootstrapping} from "./bootstrapping";
import {
  storeDispatch,
} from "./reduxStore";
import {
  tasksMutationQueuePushFlowStartAction,
} from "./reduxStore/tasks";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");

  runWithFlows();
}

async function runWithFlows() {
  await baseBootstrapping({});

  storeDispatch("", tasksMutationQueuePushFlowStartAction("test"));
}
