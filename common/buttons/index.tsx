import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuButton } from './MenuButton/MenuButton';
import { BaseButton } from './BaseButton/BaseButton';
import { App } from '../App/App';
import './style.scss';

function renderApp() {
  return (
    <App>
      {/* <MenuButton additionalCssClass="use-ripple" /> */}
      <BaseButton additionalCssClass="use-ripple" onClick={handleButtonClick} />
    </App>
  );
}

function handleButtonClick() {
  console.log('handleButtonClick invoked');
}

ReactDOM.render(renderApp(), document.getElementById('root'));
