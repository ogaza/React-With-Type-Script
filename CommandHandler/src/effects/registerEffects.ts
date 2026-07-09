import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { EventEmitter } from "../events";
import { EffectsContainer } from "./EffectsContainer";
import { FlowNames } from "./types";
import { TasksMutationQueuePushFlow } from "../flows";

export const registerEffects = (eventEmitter: EventEmitter) => {
  EffectsContainer.Instance.eventEmitter = eventEmitter;

  EffectsContainer.Instance.addEffect(
    FlowNames.TasksMutationQueuePushFlow,
    (lmw: ListenerMiddlewareInstance) =>
      new TasksMutationQueuePushFlow(
        lmw,
        EffectsContainer.Instance.eventEmitter!
      )
  );
};
