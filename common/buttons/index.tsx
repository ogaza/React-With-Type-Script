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
import { BasketOptionButton } from './BasketOptionButton/BasketOptionButton';

function renderApp() {
  return (
    <App>
      <div className="button-container">
        <div>QuickCardButton</div>
        <QuickCardButton />
        <QuickCardButton permissionState={permissionStates.onDemand} />
        <QuickCardButton permissionState={permissionStates.requested} />
      </div>
      <div className="button-container">
        <div>CheckoutButton</div>
        <CheckoutButton label="regular" onClick={handleButtonClick} />
        <CheckoutButton
          label="requested"
          onClick={handleButtonClick}
          permissionState={permissionStates.requested}
        />
        <CheckoutButton
          label="locked button"
          onClick={handleButtonClick}
          permissionState={permissionStates.onDemand}
        />
      </div>
      <div className="button-container">
        <div>BasketOptionButton</div>
        <BasketOptionButton label="basket option" />
        <BasketOptionButton
          label="basket option locked"
          permissionState={permissionStates.onDemand}
        />
        <BasketOptionButton
          label="basket option requested"
          permissionState={permissionStates.requested}
        />
      </div>
      <div className="button-container">
        <div>MenuButton</div>
        <MenuButton label="menu button" />
        <MenuButton label="locked" permissionState={permissionStates.onDemand} />
        <MenuButton label="requested" permissionState={permissionStates.requested} />
      </div>
    </App>
  );
}

function handleButtonClick() {
  console.log('handleButtonClick invoked');
}

ReactDOM.render(renderApp(), document.getElementById('root'));
