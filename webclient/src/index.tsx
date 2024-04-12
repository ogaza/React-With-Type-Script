import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { actions as appActions } from './application/actions/actions';
import App from './application/components/App';
import store from './application/store/store';
import { registerListeners } from './socket/listeners';
import { socket } from './socket/socket';

registerListeners(store, socket);

const action = appActions.start();

store.dispatch(action);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
