import { ICommand } from "../abstraction";

export class CommandOne implements ICommand {
  public commandName: string;

  constructor() {
    this.commandName = this.constructor.name;
  }
}
