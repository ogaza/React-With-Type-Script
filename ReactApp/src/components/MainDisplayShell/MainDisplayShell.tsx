import { ClickableArea } from "../Buttons/ClickableArea/ClickableArea";

export default function MainDisplayShell() {
  const className = ["main-display-shell"].join(" ");

  return (
    <div className="app-container">
      <section className="app-header">
        <NavBar />
      </section>
      <div className="panel-container">
        <section className="panel panel__left"></section>
        <section className="panel panel__right">
          {/* <section className="panel panel__right" style={{"visibility": "hidden" }}> */}
          <ClickableArea />
        </section>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
      <h1>New React App</h1>
  );
}
