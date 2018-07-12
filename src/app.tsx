import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/hello';

const App = () => (
    <div>
      <Hello name="Type Script Application"/>
    </div>
  );

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);