import { BasketsCommandNames, InvokeCommandHandler } from "./commands";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  console.log("app started");

  const data = {
    command: BasketsCommandNames.PostBasketsByIdBarcodes,
    payload: {
      payload: {
        command: "test"
      }
    },
  };

  InvokeCommandHandler.Instance.invokeCommand(JSON.stringify(data));
}
