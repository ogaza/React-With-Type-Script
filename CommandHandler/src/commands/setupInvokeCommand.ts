import { InvokeCommandHandler } from "./commandHandler";

export interface ISetupInvokeCommand {
  setupInvokeCommand(): void;
}
export class SetupInvokeCommand {
  public setupInvokeCommand() {
    if (!window.invokeCommand) {
      window.invokeCommand = (data: string) => {
        InvokeCommandHandler.Instance.invokeCommand(data);
      };
    }
  }

  public static _instance: ISetupInvokeCommand;
  public static get Instance(): ISetupInvokeCommand {
    if (!SetupInvokeCommand._instance) {
      SetupInvokeCommand._instance = new SetupInvokeCommand();
    }
    return SetupInvokeCommand._instance;
  }
  public static set Instance(value: ISetupInvokeCommand) {
    SetupInvokeCommand._instance = value;
  }

  protected constructor() {}
}
