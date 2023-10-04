import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App/App';
import {
  BaseButton,
  loadingStates,
  permissionStates
} from './BaseButton/BaseButton';
import { MenuButton } from './MenuButton/MenuButton';
import { QuickCardButton } from './QuickCard/QuickCardButton';
import { CheckoutButton } from './CheckoutButton/CheckoutButton';
import './style.scss';

function renderApp() {
  return (
    <App>
      <QuickCardButton />
      <CheckoutButton label="regular" onClick={handleButtonClick} />
      <CheckoutButton
        label="requested"
        onClick={handleButtonClick}
        permissionState={permissionStates.requested}
      />
      <CheckoutButton
        label="locked button"
        onClick={handleButtonClick}
        permissionState={permissionStates.locked}
      />
      <MenuButton label="menu button" />
      <MenuButton label="locked" permissionState={permissionStates.locked} />
      <MenuButton label="requested" permissionState={permissionStates.requested} />
    </App>
  );
}

function handleButtonClick() {
  console.log('handleButtonClick invoked');
}

ReactDOM.render(renderApp(), document.getElementById('root'));
