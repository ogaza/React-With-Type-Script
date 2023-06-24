import * as React from 'react';
import MainLayout from './layout/MainLayout';
import StatusBar from './layout/StatusBar';
import MainAreaContainer from './layout/MainAreaContainer';
import './App.scss';

export default function App() {
  return <MainLayout statusBar={<StatusBar />} mainArea={<MainAreaContainer />} />;
}
