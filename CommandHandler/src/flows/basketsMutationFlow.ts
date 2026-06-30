import { ObservableNames } from "../bootstrapping";
import { PosStatusDto } from "../dtos";
import { BaseFlow } from "./base-flow";

export class BasketsMutationFlow extends BaseFlow {
  public async runFlow(action: any) {
    console.log("running BasketsMutationFlow with action: ", action);

    const response = getPosStatus();

    this.observableChanged(
      ObservableNames.PosStatusObservable,
      response.result
    );
  }
}

function getPosStatus() {
  const result: PosStatusDto = { meta: "test dto" };
  return {
    result,
  };
}
