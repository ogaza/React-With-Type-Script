import { ClickableArea } from '../Buttons/ClickableArea/ClickableArea';

export default function MainDisplayShell() {
  const className = ['main-display-shell'].join(' ');

  return (
    <div className={className}>
      <h1>New React/Vite App</h1>
      <div className="main">
        <ClickableArea />
      </div>
    </div>
  );
}
