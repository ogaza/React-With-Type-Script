import { CommandContainer } from "../container";
import { CommandOneHandler } from "../handlers";

export const commandContainer = new CommandContainer();

commandContainer.register(new CommandOneHandler());
