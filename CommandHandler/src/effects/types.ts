import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "../flows";

export enum FlowNames {
  TasksMutationFlow = "TasksMutationFlow",
  TasksMutationQueuePushFlow = "TasksMutationQueuePushFlow",
  TasksMutationQueuePopFlow = "TasksMutationQueuePopFlow",
  TasksMutationQueueTryPopFlow = "TasksMutationQueueTryPopFlow",
  SubFlow = "SubFlow",
  SubFlowTwo = "SubFlowTwo",
}

export type EffectFactory = (
  listenerMiddleware: ListenerMiddlewareInstance
) => BaseFlow;
