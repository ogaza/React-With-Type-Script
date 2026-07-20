import {
  ActionCreatorWithPayload,
  ListenerMiddlewareInstance,
  UnknownAction,
  UnsubscribeListener,
} from "@reduxjs/toolkit";
import { ObservableNames } from "../observables";
import { EventEmitter } from "../events";
import { FlowHandler } from "../flowHandler";

export abstract class BaseFlow {
  constructor(
    protected flowName: string,
    protected listenerMiddleware: ListenerMiddlewareInstance,
    public eventEmitter: EventEmitter
  ) {}

  public async waitFor(
    // listenerApi: ListenerEffectAPIType,
    actions: ActionCreatorWithPayload<any, string>[]
  ) {
    const p = this.waitForInt(actions);
    // p.finally(() => {
    //   this.clearWaitingForAction();
    // });
    return p;
  }

  protected async waitForInt(
    //    listenerApi: ListenerEffectAPIType,
    actions: ActionCreatorWithPayload<any, string>[]
  ): Promise<[UnknownAction, unknown, unknown]> {
    // this.waitingForActions = actions.map((action) => action.type);
    // FlowHandler.Instance.refreshState();
    try {
      return await this.listenerApi!.take((currentAction: any) =>
        actions
          .map((action) => action.match(currentAction))
          .reduce((acc, curr) => acc || curr)
      );
    } catch (error) {
      if ((error as { name: string }).name === "TaskAbortError") {
        // console.info(`in waitFor:`, error);
        // this.listenerApiIsCanceled = true;
      } else {
        console.error(`in waitFor:`, error);
      }
    }
    return [{} as UnknownAction, undefined, undefined];
  }

  public start(): void {
    this.unsubscribeListener = this.listenerMiddleware.startListening(
      this.listenerOptions
    );
  }

  public observableChanged<TPayload>(
    observableName: ObservableNames,
    payload: TPayload
  ) {
    if (window.observableChanged) {
      const observableChangedData = {
        //   const observableChangedData: ObservableChangedData<TPayload> = {
        observable: observableName,
        payload,
      };
      window.observableChanged(JSON.stringify(observableChangedData));
    } else {
      console.error(
        "BaseFlow.observableChanged",
        `window.observableChanged is not defined`
      );
    }
  }

  protected unsubscribeListener: UnsubscribeListener | undefined = undefined;

  protected listenerOptions: FlowOptions = {
    actionCreator: undefined, // as unknown as TActionType,
    effect: () => {},
  };

  protected effect: any = async (action: any, listenerApi: any) => {
    this.listenerApi = listenerApi;

    FlowHandler.Instance.flowListenerIsPaused(this.flowName, this);
    listenerApi.unsubscribe();

    FlowHandler.Instance.startFlow(this.flowName, this);

    const result = await this.runFlow(action);
    await this.finishFlow(result);

    FlowHandler.Instance.endFlow(this.flowName, this);

    listenerApi.subscribe();
    FlowHandler.Instance.flowListenerIsContinued(this.flowName, this);

    this.listenerApi = undefined;
  };

  protected abstract runFlow(action: any): Promise<any>;

  public listenerApi: any | undefined;

  public storeDispatch(component: string, action: any) {
    console.info(`store.dispatch | ${action.type}`, action);
    this.listenerApi?.dispatch(action);
  }

  public abstract dispatchStartAction(listenerApi: any): void;

  public abstract finishFlow(data: any): Promise<void>;
}

export interface FlowOptions {
  /**
   * triggers the flow
   */
  actionCreator: any;
  /**
   * called when the action is dispatched
   */
  effect: any;
}
