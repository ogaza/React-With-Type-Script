import { DialogsState } from "./types";

export function toggleDialog(state: DialogsState) {
  state.isDialogOpen = !state.isDialogOpen;
}
