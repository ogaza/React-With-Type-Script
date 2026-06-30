import { PosStatusDto } from "../dtos";
import { RxState } from "../RxState";
import { observablesHandler } from "./handlers";
import { ObservableNames } from "./observableNames";

export function registerObservables(): void {
  registerCoreObservables();

  observablesHandler.on(ObservableNames.PosStatusObservable, (payload) => {
    const posStatus = payload as PosStatusDto;
    console.log("invoking posStatus next with the value: ", posStatus)
    RxState.Instance.baskets.subscriptions.posStatus.subject.next(posStatus);
  });
}

function registerCoreObservables() {}
