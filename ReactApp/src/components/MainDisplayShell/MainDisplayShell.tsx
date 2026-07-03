import ArticlesPanel from "../Article/ArticlesPanel";
import { NavBar } from "./NavBar/NavBar";
import { MenusPresenter } from "./Menus/MenusPresenter";
import { MenuSwitcher } from "./Menus/MenuSwitcher";

export function MainDisplayShell() {
  const className = ["main-display-shell"].join(" ");

  return (
    <div className="app-container">
      <section className="app-header">
        <NavBar />
      </section>
      <div className="panel-container">
        <section className="panel panel__left">
          <MenuSwitcher />
        </section>
        <section className="panel panel__right">
          <ArticlesPanel />
        </section>
        <section className="panel panel__third">
          <ThirdPanel />
          <MenusPresenter />
        </section>
      </div>
    </div>
  );
}

export function ThirdPanel() {
  return <div className="additional-panel">third panel</div>;
}
