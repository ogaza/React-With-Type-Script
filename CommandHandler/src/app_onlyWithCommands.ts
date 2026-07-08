import {
  BasketsCommandNames,
  InvokeCommandHandler,
  SetupInvokeCommand,
} from "./commands";
import { RxState } from "./RxState";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");
  runWithRxStateCommands();
  runInvokeCommandHandler();
}

function runWithRxStateCommands() {
  SetupInvokeCommand.Instance.setupInvokeCommand();

  const basketId = "id_1";
  const code = "xyz_123";

  RxState.Instance.baskets.commands.postBasketsByIdBarcodes(basketId, {
    requestBody: {
      barcode: {
        barcode: code,
      },
    },
  });
}

function runInvokeCommandHandler() {
  const data = {
    command: BasketsCommandNames.PostBasketsByIdBarcodes,
    payload: {
      payload: {
        command: "test",
      },
    },
  };
  InvokeCommandHandler.Instance.invokeCommand(JSON.stringify(data));
}
