import { storeDispatch } from "../reduxStore";
import {
  ICommandHandler,
  ICommandPayload,
  IInvokeCommandHandler,
  PayloadBase,
} from "./interfaces";

import { TasksCommandNames, CommandNames } from "./names";

export class InvokeCommandHandler implements IInvokeCommandHandler {
  public commandHandler: CommandHandler = new CommandHandler();
  public flowCommandHandler = new FlowCommandHandler();

  public invokeCommand(data: string): boolean {
    const payload = JSON.parse(data) as PayloadBase<ICommandPayload, string>;
    if (payload.command) {
      const handler = this.commandHandler.handlers[payload.command];
      if (handler) {
        handler(payload);
        return true;
      }
    }

    return false;
  }

  setupCommandHandler(): void {
    this.setupTasksCommandsHandler();
  }

  public setupTasksCommandsHandler() {
    this.commandHandler.on(
      TasksCommandNames.PostTasksByIdBarcodes,
      (payload) => {
        this.flowCommandHandler.tasksMutationFlow({
          mutationName: TasksCommandNames.PostTasksByIdBarcodes,
          payload: payload.payload,
        });
      }
    );
  }

  public static _instance: IInvokeCommandHandler;
  public static get Instance(): IInvokeCommandHandler {
    if (!InvokeCommandHandler._instance) {
      InvokeCommandHandler._instance = new InvokeCommandHandler();
      InvokeCommandHandler._instance.setupCommandHandler();
    }
    return InvokeCommandHandler._instance;
  }
  public static set Instance(value: IInvokeCommandHandler) {
    InvokeCommandHandler._instance = value;
  }
  protected constructor() {}
}

export class FlowCommandHandler {
  public startupFlow(payload: PayloadBase<ICommandPayload, string>) {
    storeDispatch(
      `FlowCommandHandler.startupFlow: ${payload?.command}`,
      {}
      // startupSlice.actions.startupFlowStartAction({}),
    );
    /**
     * Start the CommandFlow as this is used for the generic flow commands that are used across multiple flows.
     * This ensures that the CommandFlow is listening for commands when the app starts and can handle any incoming commands appropriately.
     */
    storeDispatch(
      `FlowCommandHandler.commandFlow: ${payload?.command}`,
      { success: false }
      // commandSlice.actions.commandFlowCancelAction({
      //     success: false,
      // }),
    );
  }

  public tasksMutationFlow(payload: any) {
    storeDispatch(
      `FlowCommandHandler.tasksMutationFlow: ${payload.mutationName}`,
      payload
      // tasksMutationQueueSlice.actions.tasksMutationQueuePushFlowStartAction(payload),
    );
  }
}

/* typed */
export class CommandHandler implements ICommandHandler {
  public handlers: {
    [key: string]: (payload: PayloadBase<ICommandPayload, string>) => void;
  } = {};
  constructor() {}
  public on(
    name: CommandNames,
    handler: (payload: PayloadBase<ICommandPayload, string>) => void
  ) {
    this.handlers[name as string] = handler;
  }
}
/*
// untyped - for calrity
export class CommandHandler {
  public handlers: { [key: string]: any } = {};
  constructor() {}
  // register a handler
  public on(name: string, handler: any) {
    if (this.handlers.name) {
      console.warn(`Handler for ${name} already exists. Overwriting it.`);
    }
    this.handlers[name] = handler;
  }
}
*/
