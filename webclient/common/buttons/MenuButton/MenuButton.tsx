import * as React from 'react';
import { BaseButton, permissionStates } from '../BaseButton/BaseButton';
import './MenuButton.scss';

export function MenuButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  permissionState = null
}) {
  return (
    <BaseButton
      additionalCssClass="button--basket-item button--square"
      key={id}
      onClick={handleClick}
      permissionState={permissionState ? permissionState : permissionStates.allowed}
    >
      {label}
    </BaseButton>
  );

  function handleClick() {
    onClick();
  }
}
