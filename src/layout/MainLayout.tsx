import * as React from 'react';

interface IMainLayoutProps {
  statusBar: JSX.Element;
  mainPanel: JSX.Element;
}

export default function MainLayout({ statusBar, mainPanel }: IMainLayoutProps) {
  return (
    <main>
      {statusBar}
      {mainPanel}
    </main>
  );
}
