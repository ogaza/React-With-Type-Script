import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";
import { FlowNames } from "../effects";
import { subFlowTwoEndAction, subFlowTwoStartAction } from "../reduxStore/tasks";

export class SubFlowTwo extends BaseFlow {
  public constructor(
    lmw: ListenerMiddlewareInstance,
    eventEmitter: EventEmitter
  ) {
    super(FlowNames.SubFlowTwo, lmw, eventEmitter);

    this.listenerOptions = {
      actionCreator: subFlowTwoStartAction,
      effect: this.effect,
    };
  }

  protected async runFlow(action: any) {
    console.log("running sub flow two with an action: ", action);

    this.storeDispatch("", subFlowTwoEndAction("sub flow two end"));
  }

  public dispatchStartAction(listenerApi: any): void {
  }

  public finishFlow(data: any): Promise<void> {
    return Promise.resolve();
  }
}
