import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { BaseFlow } from "../flows";
import { FlowNames } from "./types";
import { EventEmitter } from "../events";

export interface IEffectsContainer {
  listenerMiddleware: ListenerMiddlewareInstance | undefined;
  eventEmitter: EventEmitter | undefined;

  addEffect(
    effectName: FlowNames,
    effectFactory: (listenerMiddleware: ListenerMiddlewareInstance) => BaseFlow
  ): void;

  startAll(): void;
}

export class EffectsContainer implements IEffectsContainer {
  /** takes an effect factory function and puts it in  the 
  * effectFactories dictionary under the effectName key
  */
  addEffect(
    effectName: FlowNames,
    effectFactory: (listenerMiddleware: ListenerMiddlewareInstance) => BaseFlow
  ): void {
    throw new Error("Method not implemented.");
  }

  startAll(): void {
    throw new Error("Method not implemented.");
  }

  /* Singleton pattern impl. */
  protected static instance: IEffectsContainer;
  /** singleton getter */
  public static get Instance(): IEffectsContainer {
    if (!this.instance) {
      /* setting up the effects container */
      this.instance = new EffectsContainer();
    }
    return this.instance;
  }
  /** singleton instance */
  public static set Instance(value: IEffectsContainer) {
    this.instance = value;
  }

  /** listener middleware 
  it's set up is in the store.ts file
  it references an object from the redux tool kit
  */
  public listenerMiddleware: ListenerMiddlewareInstance | undefined;
  /** event emitter */
  public eventEmitter: EventEmitter | undefined;
  /** effect factories
   * entries are added using the addEffect method
   * which invications are gathered in the registerEffects.ts file
   */
  protected effectFactories: {
    [key: string]: EffectFactory;
  } = {};
  /* effects dictionary */
  protected effects: { [key: string]: BaseFlow } = {};
}

type EffectFactory = (
  listenerMiddleware: ListenerMiddlewareInstance
) => BaseFlow;
