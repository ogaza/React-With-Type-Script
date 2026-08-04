export interface ICommand {
  commandName: string;
}

export interface ICommandHandler<T extends ICommand> {
  canHandle(command: T): boolean;
  handle(command: T): void;
}
