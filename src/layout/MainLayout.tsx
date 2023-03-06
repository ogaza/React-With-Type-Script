import * as React from 'react';
import './MainLayout.scss';

interface IMainLayoutProps {
  statusBar: JSX.Element;
  mainPanel: JSX.Element;
}

export default function MainLayout({ statusBar, mainPanel }: IMainLayoutProps) {
  return (
    <main className="main-layout">
      {statusBar}
      {mainPanel}
    </main>
  );
}
