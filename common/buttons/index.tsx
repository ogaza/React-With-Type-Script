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
import './style.scss';

function renderApp() {
  return (
    <App>
      <QuickCardButton />
      {/* <MenuButton additionalCssClass="use-ripple" /> */}
      <BaseButton
        label="regular"
        additionalCssClass="button--checkout"
        onClick={handleButtonClick}
      />
      <BaseButton
        label="locked button"
        additionalCssClass="button--checkout"
        onClick={handleButtonClick}
        permissionState={permissionStates.locked}
      />
      {/* <BaseButton
        label="permission requested"
        additionalCssClass="button--checkout"
        onClick={handleButtonClick}
        permissionState={permissionStates.requested}
      />
      <BaseButton
        label="loading"
        additionalCssClass="button--checkout"
        onClick={handleButtonClick}
        loadingState={loadingStates.loading}
      />
      <BaseButton
        label="disabled"
        additionalCssClass="button--checkout"
        onClick={handleButtonClick}
        enabled={false}
      /> */}
    </App>
  );
}

function handleButtonClick() {
  console.log('handleButtonClick invoked');
}

ReactDOM.render(renderApp(), document.getElementById('root'));
