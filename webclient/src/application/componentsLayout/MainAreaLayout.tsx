import * as React from 'react';
import './MainAreaLayout.scss';

interface IMainAreaLayoutProps {
  panelLeft: JSX.Element;
  panelRight: JSX.Element;
}

export function MainAreaLayout({ panelLeft, panelRight }: IMainAreaLayoutProps) {
  return (
    <section className="main-panel-layout">
      <div className="main-panel-layout__left">{panelLeft}</div>
      <div className="main-panel-layout__right">{panelRight}</div>
    </section>
  );
}
