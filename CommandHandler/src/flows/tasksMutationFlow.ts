import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { ObservableNames } from "../observables";
import { AppStatusDto } from "../dtos";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";
import { add } from "../reduxStore/tasks";

export class TasksMutationFlow extends BaseFlow {
  constructor(
    listenerMiddleware: ListenerMiddlewareInstance,
    eventEmitter: EventEmitter
  ) {
    super("TasksMutationFlow", listenerMiddleware, eventEmitter);
    // this.listenerOptions = {
    //     actionCreator: add,
    //     effect: this.effect,
    // };
  }

  public async runFlow(action: any) {
    console.log("running TasksMutationFlow with action: ", action);

    const response = getAppStatus();

    this.observableChanged(
      ObservableNames.AppStatusObservable,
      response.result
    );
  }

  public dispatchStartAction(listenerApi: any): void {
    throw new Error("Method not implemented.");
  }
  public finishFlow(data: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

function getAppStatus() {
  const result: AppStatusDto = { meta: "test dto" };
  return {
    result,
  };
}
