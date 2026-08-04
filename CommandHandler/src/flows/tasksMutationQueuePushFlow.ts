import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";
import { FlowNames } from "../effects";
import {
  subFlowEndAction,
  subFlowStartAction,
  subFlowTwoEndAction,
  tasksMutationQueuePushFlowStartAction,
} from "../reduxStore/tasks";

export class TasksMutationQueuePushFlow extends BaseFlow {
  public constructor(
    lmw: ListenerMiddlewareInstance,
    eventEmitter: EventEmitter
  ) {
    super(FlowNames.TasksMutationQueuePushFlow, lmw, eventEmitter);

    this.listenerOptions = {
      actionCreator: tasksMutationQueuePushFlowStartAction,
      effect: this.effect,
    };
  }

  protected async runFlow(action: any) {
    const takePromise = this.waitFor([
      tasksMutationQueuePushFlowStartAction,
      subFlowEndAction,
      subFlowTwoEndAction,
    ]);

    this.storeDispatch("", subFlowStartAction("trigger sub flow"));

    const [awaitedAction] = await takePromise;

    if (tasksMutationQueuePushFlowStartAction.match(awaitedAction)) {
      console.log("start action reached");
    }
    if (subFlowEndAction.match(awaitedAction)) {
      console.log("end flow action reached");
    }
    if (subFlowTwoEndAction.match(awaitedAction)) {
      console.log("end flow two action reached");

      return;
    }
  }

  public dispatchStartAction(listenerApi: any): void {}

  public finishFlow(data: any): Promise<void> {
    return Promise.resolve();
  }
}
