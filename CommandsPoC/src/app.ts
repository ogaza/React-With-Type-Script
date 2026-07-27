import { commandContainer, CommandOne } from "./commands";

document.addEventListener("DOMContentLoaded", handleAppLoaded);

function handleAppLoaded() {
  commandContainer.dispatch(new CommandOne());
}
