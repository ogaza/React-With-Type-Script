import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/hello';
import { store } from './store/store';

const App = () => (
    <div>
      <Hello name="Type Script Application"/>
    </div>
  );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);