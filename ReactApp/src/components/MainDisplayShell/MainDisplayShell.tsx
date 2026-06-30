import ArticlesPanel from "../Article/ArticlesPanel";
import { NavBar } from "./NavBar";
import { useMenus } from "./MenusPresenter";
import { MenusPresenter } from "./MenusPresenter";
import { ClickableArea } from "../Buttons/ClickableArea/ClickableArea";

export default function MainDisplayShell() {
  const className = ["main-display-shell"].join(" ");

  const [menuName, setMenu, closeMenu] = useMenus();

  return (
    <div className="app-container">
      <section className="app-header">
        <NavBar />
      </section>
      <div className="panel-container">
        <section className="panel panel__left">
          <MenuSwitcher
            btnOneCalback={() => setMenu("menuOne")}
            btnTwoCalback={() => setMenu("menuTwo")}
            btnThreeCalback={() => closeMenu()}
          />
        </section>
        <section className="panel panel__right">
          <ArticlesPanel />
          {/* <section className="panel panel__right" style={{"visibility": "hidden" }}> */}
          {/* <ClickableArea /> */}
        </section>
        <section className="panel panel__third">
          <ThirdPanel isVisible={!menuName} />
          <MenusPresenter openedMenuName={menuName} />
        </section>
      </div>
    </div>
  );
}

export function MenuSwitcher({
  btnOneCalback,
  btnTwoCalback,
  btnThreeCalback,
}: IMenuSwitcherProps) {
  return (
    <div className="menu-switcher">
      <ClickableArea onClick={btnOneCalback}>Menu one</ClickableArea>
      <ClickableArea onClick={btnTwoCalback}>Menu two</ClickableArea>
      <ClickableArea onClick={btnThreeCalback}>Close Menu</ClickableArea>
    </div>
  );
}

export interface IMenuSwitcherProps {
  btnOneCalback: () => void;
  btnTwoCalback: () => void;
  btnThreeCalback: () => void;
}

export function ThirdPanel({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="additional-panel">
      third panel
    </div>
  );
}
