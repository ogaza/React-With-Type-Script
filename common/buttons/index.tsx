import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuButton } from './MenuButton/MenuButton';
// import App from './App';

export default function App() {
  return (
    <div>
      <MenuButton />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('test');
