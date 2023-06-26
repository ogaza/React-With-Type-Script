import * as React from 'react';
import MainLayout from '../componentsLayout/MainLayout';
import StatusBar from '../componentsLayout/StatusBar';
import MainAreaContainer from '../componentsLayout/MainAreaContainer';
import './App.scss';

export default function App() {
  return <MainLayout statusBar={<StatusBar />} mainArea={<MainAreaContainer />} />;
}
