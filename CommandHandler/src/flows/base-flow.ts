import { ObservableNames } from "../bootstrapping";

export abstract class BaseFlow {
  public observableChanged<TPayload>(
    observableName: ObservableNames,
    payload: TPayload
  ) {
    if (window.observableChanged) {
      const observableChangedData = {
    //   const observableChangedData: ObservableChangedData<TPayload> = {
        observable: observableName,
        payload,
      };
      window.observableChanged(JSON.stringify(observableChangedData));
    } else {
      console.error(
        "BaseFlow.observableChanged",
        `window.observableChanged is not defined`
      );
    }
  }
}
