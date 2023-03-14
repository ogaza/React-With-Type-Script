import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { actions as appActions } from './application/actions';
// import { ItemActions } from './items';
import { registerListeners } from './socket/listeners';
import { socket } from './socket/socket';

import store from './store/store';

registerListeners(store, socket);

const action = appActions.start();

store.dispatch(action);
// store.dispatch(ItemActions.getItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
