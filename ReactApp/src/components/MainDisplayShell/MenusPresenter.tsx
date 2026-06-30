import { useState } from "react";
import { Menu } from "./Menus";

export type MenuName = "" | "menuOne" | "menuTwo";

export function MenusPresenter({ openedMenuName }: IMenusPresenterProps) {
  const menuTwoStyle = {
    "--menu-bg-color": "#aab0bd",
  };

  return (
    <section
      className="menus-presenter-container"
      data-isopen={!!openedMenuName}
    >
      <Menu isOpen={openedMenuName == "menuOne"}>Menu one</Menu>
      <Menu isOpen={openedMenuName == "menuTwo"} style={menuTwoStyle}>
        Menu two
      </Menu>
    </section>
  );
}

export interface IMenusPresenterProps {
  openedMenuName: MenuName;
}

export function useMenus(): UseMenuReturnType {
  const [openedMenuName, setOpenedMenuName] = useState<MenuName>("");

  return [openedMenuName, setMenu, closeMenu];

  function setMenu(menuName: MenuName) {
    if (menuName == openedMenuName) {
      return;
    }
    setOpenedMenuName(menuName);
  }

  function closeMenu() {
    return setMenu("");
  }
}

export type UseMenuReturnType = [
  menuName: MenuName,
  setMenu: (menuname: MenuName) => void,
  closeMenu: () => void,
];
