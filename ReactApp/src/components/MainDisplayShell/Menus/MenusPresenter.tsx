import { TaskListView } from "../../Tasks";
import { Menu } from "./Menus";
import { useMenus } from "./useMenus";

export function MenusPresenter() {
  const menuTwoStyle = {
    "--menu-bg-color": "#aab0bd",
  };

  const [openedMenuName] = useMenus();

  return (
    <div className="menus-presenter-container" data-isopen={!!openedMenuName}>
      <Menu isOpen={openedMenuName == "menuOne"}>Menu one</Menu>
      <Menu isOpen={openedMenuName == "menuTwo"} style={menuTwoStyle}>
        <TaskListView />
      </Menu>
    </div>
  );
}
