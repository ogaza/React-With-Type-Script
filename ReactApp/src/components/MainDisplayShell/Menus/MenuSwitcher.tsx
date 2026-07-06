import { ClickableArea, useDialogs } from "../..";
import {
  fetchTasksThunk,
  MenuName,
  menusSlice,
  store,
} from "../../../appState";
import { useMenus } from "./useMenus";

export function MenuSwitcher() {
  const [, switchMenu] = useMenus();
  const [, toggleDialog] = useDialogs();

  return (
    <div className="menu-switcher">
      <ClickableArea value="menuOne" onClick={handleMenuSelection}>
        Menu One
      </ClickableArea>
      <ClickableArea value="menuTwo" onClick={handleMenuSelection}>
        Menu Two
      </ClickableArea>
      <ClickableArea value="" onClick={handleMenuSelection}>
        Close Menu
      </ClickableArea>
      <ClickableArea value="" onClick={handleDialogSwitch}>
        Dialog
      </ClickableArea>
    </div>
  );

  async function handleMenuSelection(value: string) {
    const menuName = value as MenuName;
    if (menuName == "menuOne") {
      presentMenuOne();
      return;
    }
    if (menuName == "menuTwo") {
      getAndPresentTasksMenu();
      return;
    }
    switchMenu(menuName);
  }

  function handleDialogSwitch() {
    toggleDialog();
  }
}

async function presentMenuOne() {
  store.dispatch(menusSlice.actions.switchMenu("menuOne"));
}

async function getAndPresentTasksMenu() {
  store.dispatch(menusSlice.actions.switchMenu("menuTwo"));
  await store.dispatch(fetchTasksThunk());
}
