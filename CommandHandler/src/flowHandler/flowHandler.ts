import { Subject } from "rxjs";
import { BaseFlow } from "../flows";

export class FlowHandler implements IFlowHandler {
  protected static _instance: IFlowHandler;
  public static get Instance(): IFlowHandler {
    if (!FlowHandler._instance) {
      FlowHandler._instance = new FlowHandler();
    }
    return FlowHandler._instance;
  }
  public static set Instance(value: IFlowHandler) {
    FlowHandler._instance = value;
  }

  protected constructor() {}
  activeFlows: { [key: string]: BaseFlow } | undefined;
  stateSubscription: Subject<{ [key: string]: BaseFlow }> | undefined;
  startFlow(flowName: string, flow: BaseFlow): void {
    // throw new Error("Method not implemented.");
  }
  endFlow(flowName: string, flow: BaseFlow): void {
    // throw new Error("Method not implemented.");
  }
  refreshState(): void {
    // throw new Error("Method not implemented.");
  }
  flowListenerIsPaused(flowName: string, flow: BaseFlow): void {
    // throw new Error("Method not implemented.");
  }
  flowListenerIsContinued(flowName: string, flow: BaseFlow): void {
    // throw new Error("Method not implemented.");
  }
  isFlowPaused(actionName: string) {
    // throw new Error("Method not implemented.");
  }
  isFlowActive(actionName: string) {
    // throw new Error("Method not implemented.");
  }
}

export interface IFlowHandler {
  activeFlows: { [key: string]: BaseFlow } | undefined;
  stateSubscription: Subject<{ [key: string]: BaseFlow }> | undefined;

  startFlow(flowName: string, flow: BaseFlow): void;
  endFlow(flowName: string, flow: BaseFlow): void;
  refreshState(): void;
  flowListenerIsPaused(flowName: string, flow: BaseFlow): void;
  flowListenerIsContinued(flowName: string, flow: BaseFlow): void;
  isFlowPaused(actionName: string): any;
  isFlowActive(actionName: string): any;
}
