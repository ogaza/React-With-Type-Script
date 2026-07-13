import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";
import { FlowNames } from "../effects";
import { tasksMutationQueuePushFlowStartAction } from "../reduxStore/tasks";

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

  /**
   * should be protected
   */
  //  protected async runFlow(
  public async runFlow(action: any) {
    console.log("running TasksMutationQueuePushFlow with action: ", action);

    const { payload } = action;

    // const queue = this.getState()?.tasksMutationQueue?.queue;
    // console.info(`runFlow queue.length=${queue?.length}`, payload);
    // this.observableChanged<number>(
    //     ObservableNames.TasksMutationQueueSizeObservable,
    //     queue.length,
    // );
    // this.listenerApi?.dispatch(tasksMutationQueueTryPopFlowStartAction({ ...payload }));
    // return { success: true };
  }

  public dispatchStartAction(listenerApi: any): void {
    // throw new Error("Method not implemented.");
  }
  public finishFlow(data: any): Promise<void> {
    return new Promise<void>(() => {});
    // throw new Error("Method not implemented.");
  }
}
