import { AppStatusDto } from "../dtos";
import { RxState } from "../RxState";
import { observablesHandler } from "../handlers/handlers";
import { ObservableNames } from "./observableNames";

export function registerObservables(): void {
  registerCoreObservables();

  observablesHandler.on(ObservableNames.AppStatusObservable, (payload) => {
    const appStatus = payload as AppStatusDto;
    console.log("invoking appStatus next with the value: ", appStatus)
    RxState.Instance.tasks.subscriptions.appStatus.subject.next(appStatus);
  });
}

function registerCoreObservables() {}
