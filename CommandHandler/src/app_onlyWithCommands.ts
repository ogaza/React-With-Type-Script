import {
  TasksCommandNames,
  InvokeCommandHandler,
  SetupInvokeCommand,
} from "./commands";
import { RxState } from "./rxState";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");
  runWithRxStateCommands();
  runInvokeCommandHandler();
}

function runWithRxStateCommands() {
  SetupInvokeCommand.Instance.setupInvokeCommand();

  const taskId = "id_1";
  const code = "xyz_123";

  RxState.Instance.tasks.commands.postTasksByIdBarcodes(taskId, {
    requestBody: {
      barcode: {
        barcode: code,
      },
    },
  });
}

function runInvokeCommandHandler() {
  const data = {
    command: TasksCommandNames.PostTasksByIdBarcodes,
    payload: {
      payload: {
        command: "test",
      },
    },
  };
  InvokeCommandHandler.Instance.invokeCommand(JSON.stringify(data));
}
