import * as React from 'react';
import MainLayout from './layout/MainLayout';
import StatusBarContainer from './layout/StatusBarContainer';
import MainPanelContainer from './layout/MainPanelContainer';
import './App.scss';

export default function App() {
  return <MainLayout statusBar={<StatusBarContainer />} mainPanel={<MainPanelContainer />} />;
}
