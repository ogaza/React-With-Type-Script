import { registerHostCallbacks, registerObservables } from "./bootstrapping";
import {
  BasketsCommandNames,
  InvokeCommandHandler,
  SetupInvokeCommand,
} from "./commands";
import { BasketsMutationFlow } from "./flows";
import { RxState } from "./RxState";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");

  runWithRxSubscriptions();

  // runWithRxStateCommands();
  // runInvokeCommandHandler();
}

function runWithRxSubscriptions() {
  registerHostCallbacks();
  registerObservables();

  RxState.Instance.baskets.subscriptions.posStatus.subject.subscribe(
    handlePosStatusChanged
  );

  const action = {};
  const flow = new BasketsMutationFlow();
  flow.runFlow(action);

  function handlePosStatusChanged(posStatus: any) {
    console.log("posStstus changed to: ", posStatus);

    console.log(window?.observableChanged);
    // console.log(window?.observableChanged(JSON.stringify(posStatus));
  }
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
