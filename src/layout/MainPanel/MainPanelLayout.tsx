import * as React from 'react';
import './MainPanelLayout.scss';

interface IMainPanelLayoutProps {
  panelLeft: JSX.Element;
  panelRight: JSX.Element;
}

export function MainPanelLayout({ panelLeft, panelRight }: IMainPanelLayoutProps) {
  return (
    <section className="main-panel-layout">
      <div className="main-panel-layout__left">{panelLeft}</div>
      <div className="main-panel-layout__right">{panelRight}</div>
    </section>
  );
}
