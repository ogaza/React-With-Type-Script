import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainLayout from './layout/MainLayout';
import StatusBarContainer from './layout/StatusBarContainer';
import MainPanelContainer from './layout/MainPanelContainer';

function App() {
  return <MainLayout statusBar={<StatusBarContainer />} mainPanel={<MainPanelContainer />} />;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
