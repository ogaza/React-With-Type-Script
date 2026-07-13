import { CommandNames } from "./names";

export interface IInvokeCommandHandler {
    setupCommandHandler(): void;
    invokeCommand(data: string): boolean;

    // get taskCommandHandler(): ITasksCommandHandler;
    get commandHandler(): ICommandHandler;
}

export interface ICommandHandler {
  handlers: {
    [key: string]: (payload: PayloadBase<ICommandPayload, string>) => void;
  };
  on(
    name: CommandNames,
    handler: (payload: PayloadBase<ICommandPayload, string>) => void
  ): void;
}

export interface ICommandPayload {
  commandId?: string;
}

export interface PayloadBase<TPayload, TNames = string> {
  /**
   * used to match the command with the result / subject.next()
   */
  commandId: string;
  /**
   * the command to execute
   */
  command?: TNames;
  payload?: TPayload;
}

export interface PayloadWrapper<T> {
  payload: T;
}

export interface ITasksCommandHandler {
}
