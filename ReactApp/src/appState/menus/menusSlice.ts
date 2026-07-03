import { createSlice } from "@reduxjs/toolkit";
import { MenusState } from "./types";
import { closeMenu, switchMenu } from "./reducers";

const initialState: MenusState = { menuName: "" };

export const menusSlice = createSlice({
  name: "menus",
  initialState,
  reducers: { closeMenu, switchMenu },
});
