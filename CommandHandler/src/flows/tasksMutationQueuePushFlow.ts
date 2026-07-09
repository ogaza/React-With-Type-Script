import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "./base-flow";
import { EventEmitter } from "../events";

export class TasksMutationQueuePushFlow extends BaseFlow {
  public constructor(
    lmw: ListenerMiddlewareInstance,
    eventEmitter: EventEmitter
  ) {
    super();
  }

  public async runFlow(action: any) {
    console.log("running TasksMutationQueuePushFlow with action: ", action);
  }
}
