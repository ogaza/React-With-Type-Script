import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, dialogsSlice } from "../../appState";

export function useDialogs(): UseDialogReturnType {
  const isDialogOpen: boolean = useSelector(
    (state: AppState) => state.dialogs.isDialogOpen,
  );
  const dispatch: AppDispatch = useDispatch();

  return [isDialogOpen, toggleDialog];

  function toggleDialog() {
    dispatch(dialogsSlice.actions.toggleDialog());
  }
}

export type UseDialogReturnType = [
  isDialogOpen: boolean,
  toggleDialog: () => void,
];
