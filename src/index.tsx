import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { registerListeners } from './socket/listeners';
import { socket } from './socket/socket';
import store from './store/store';

registerListeners(store, socket);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
