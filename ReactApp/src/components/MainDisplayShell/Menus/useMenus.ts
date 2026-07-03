import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, MenuName, menusSlice } from "../../../appState";

export function useMenus(): UseMenuReturnType {
  const openedMenuName: MenuName = useSelector(
    (state: AppState) => state.menus.menuName,
  );
  const dispatch: AppDispatch = useDispatch();

  return [openedMenuName, switchMenu, closeMenu];

  function switchMenu(menuName: MenuName) {
    dispatch(menusSlice.actions.switchMenu(menuName));
  } 

  function closeMenu() {
    dispatch(menusSlice.actions.closeMenu());
  }
}

export type UseMenuReturnType = [
  menuName: MenuName,
  setMenu: (menuname: MenuName) => void,
  closeMenu: () => void,
];
