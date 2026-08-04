import { ICommandHandler } from "../abstraction";
import { CommandOne } from "../commands";

export class CommandOneHandler implements ICommandHandler<CommandOne> {
  public canHandle(command: CommandOne): boolean {
    return command.constructor.name === CommandOne.name;
  }

  public handle(command: CommandOne) {
    console.log("handling: ", command);
  }
}
