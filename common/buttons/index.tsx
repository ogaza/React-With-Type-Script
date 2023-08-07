import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuButton } from './MenuButton/MenuButton';
import { App } from '../App/App';
import './style.scss';

function renderApp() {
  return (
    <App>
      <MenuButton additionalCssClass="use-ripple" />
    </App>
  );
}

ReactDOM.render(renderApp(), document.getElementById('root'));
