import { createSlice } from "@reduxjs/toolkit";
import { DialogsState } from "./types";
import { toggleDialog } from "./reducers";

const initialState: DialogsState = { isDialogOpen: false };

export const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: { toggleDialog },
});
