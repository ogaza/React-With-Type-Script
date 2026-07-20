import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";
import { FlowNames } from "../effects";
import {
  subFlowStartAction,
  subFlowTwoStartAction,
} from "../reduxStore/tasks";

export class SubFlow extends BaseFlow {
  public constructor(
    lmw: ListenerMiddlewareInstance,
    eventEmitter: EventEmitter
  ) {
    super(FlowNames.SubFlow, lmw, eventEmitter);

    this.listenerOptions = {
      actionCreator: subFlowStartAction,
      effect: this.effect,
    };
  }

  protected async runFlow(action: any) {
    console.log("running sub flow with an action: ", action);

    const { payload } = action;

    this.storeDispatch("", subFlowTwoStartAction("trigger sub flow two"));
  }

  public dispatchStartAction(listenerApi: any): void {
  }

  public finishFlow(data: any): Promise<void> {
    return Promise.resolve();
  }
}
