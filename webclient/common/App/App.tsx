import * as React from 'react';
import './App.scss';

export function App({ children }) {
  return (
    <div className="app">
      <div className="app__header"></div>
      <div className="app__content">{children}</div>
      <div className="app__footer">
        <a className="button button--back" href="./">
          back
        </a>
      </div>
    </div>
  );
}
