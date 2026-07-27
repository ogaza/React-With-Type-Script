import { ICommand, ICommandHandler } from "../abstraction";

export class CommandContainer {
  constructor() {
    this.handlers = [];
  }
  private handlers!: ICommandHandler<ICommand>[];

  register(commandHandler: ICommandHandler<ICommand>) {
    this.handlers.push(commandHandler);
  }

  dispatch(command: ICommand) {
    var runner = this.handlers.find((x) => x.canHandle(command));
    if (runner) {
      runner.handle(command);
    }
  }
}
