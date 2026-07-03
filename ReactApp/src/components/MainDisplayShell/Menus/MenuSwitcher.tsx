import { ClickableArea } from "../..";
import {
  fetchTasksThunk,
  MenuName,
  menusSlice,
  store,
} from "../../../appState";
import { useMenus } from "./useMenus";

export function MenuSwitcher() {
  const [, switchMenu] = useMenus();

  return (
    <div className="menu-switcher">
      <ClickableArea value="menuOne" onClick={handleMenuSelection}>
        Menu one
      </ClickableArea>
      <ClickableArea value="menuTwo" onClick={handleMenuSelection}>
        Menu two
      </ClickableArea>
      <ClickableArea value="" onClick={handleMenuSelection}>
        Close Menu
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
}

async function presentMenuOne() {
  store.dispatch(menusSlice.actions.switchMenu("menuOne"));
}

async function getAndPresentTasksMenu() {
  store.dispatch(menusSlice.actions.switchMenu("menuTwo"));
  await store.dispatch(fetchTasksThunk());
}
