import { ICommand } from "../abstraction";

export class CommandTwo implements ICommand {
  public commandName: string;

  constructor() {
    this.commandName = this.constructor.name;
  }
}
