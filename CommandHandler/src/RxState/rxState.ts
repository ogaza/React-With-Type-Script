import { TasksCommands } from "../commands";
import { TasksSubscription } from "../subscriptions";
import { IRxState, RxManagerState } from "./interfaces";

export class RxState implements IRxState {
  public static get Instance(): IRxState {
    window.__MTP__ = window.__MTP__ || {};
    if (!window.__MTP__.RxStateInstance) {
      window.__MTP__.RxStateInstance = new RxState();
    }
    return window.__MTP__.RxStateInstance as IRxState;
  }
  public static set Instance(value: IRxState) {
    window.__MTP__ = window.__MTP__ || {};
    window.__MTP__.RxStateInstance = value;
  }

  protected constructor() {}
//   public _commonapi = {};

  public loadStore() {}

  public tasks: RxManagerState<TasksCommands, TasksSubscription> = {
    commands: new TasksCommands(),
    subscriptions: new TasksSubscription(),
  };
}
