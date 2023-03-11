import * as React from 'react';
import MainLayout from './layout/MainLayout';
import StatusBarContainer from './layout/StatusBarContainer';
import MainAreaContainer from './layout/MainAreaContainer';
import './App.scss';

export default function App() {
  return <MainLayout statusBar={<StatusBarContainer />} mainArea={<MainAreaContainer />} />;
}
