import * as React from 'react';
import './MainLayout.scss';

interface IMainLayoutProps {
  statusBar: JSX.Element;
  mainArea: JSX.Element;
}

export default function MainLayout({ statusBar, mainArea }: IMainLayoutProps) {
  return (
    <main className="main-layout">
      <div className="status-bar__container">{statusBar}</div>
      <div className="main-area">{mainArea}</div>
    </main>
  );
}
