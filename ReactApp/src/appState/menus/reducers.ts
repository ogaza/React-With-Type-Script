import { PayloadAction } from "@reduxjs/toolkit";
import { MenusState, MenuName } from "./types";

export function switchMenu(state: MenusState, action: PayloadAction<MenuName>) {
  state.menuName = action.payload;
}
export function closeMenu(state: MenusState) {
  state.menuName = "";
}
