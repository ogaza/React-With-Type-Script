import { baseBootstrapping } from "./bootstrapping";
import { storeDispatch } from "./reduxStore";
import { tasksMutationQueuePushFlowStartAction } from "./reduxStore/tasks";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  runWithFlows();
}

async function runWithFlows() {
  await baseBootstrapping({});

  const btn = document.querySelector(".btn");

  btn?.addEventListener("click", handleBtnClick);

  function handleBtnClick() {
    storeDispatch("", tasksMutationQueuePushFlowStartAction("test"));
  }
}
