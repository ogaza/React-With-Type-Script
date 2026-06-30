import { MtpHostGlobalThis } from "./globalThis";
import { observablesHandler } from "./handlers";

export function registerHostCallbacks(): void {
  const hostGlobalThis = globalThis as MtpHostGlobalThis;

  hostGlobalThis.observableChanged = (strData: string) => {
    try {
      const data = JSON.parse(strData);
      //   const data = JSON.parse(strData) as ObservableChangedData<any>;

      const handler = observablesHandler.handlers[data.observable];
      if (handler) {
        handler(data.payload);
      } else {
        console.error(`ERR observableChanged: ${data.observable} not handled`);
      }

      //   RxManager.Instance.clearCommand(data.commandId);
    } catch (error) {
      console.error(
        "baseBootstrapping",
        `EX observableChanged: ${JSON.stringify(error)}`
      );
    }
  };
}
