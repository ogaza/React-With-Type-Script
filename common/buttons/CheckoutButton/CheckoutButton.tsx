import * as React from 'react';
import { BaseButton, permissionStates } from '../BaseButton/BaseButton';
import './CheckoutButton.scss';

export function CheckoutButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  permissionState = null
}) {
  return (
    <BaseButton
      additionalCssClass="button--checkout"
      key={id}
      onClick={handleClick}
      permissionState={permissionState ? permissionState : permissionStates.none}
    >
      {label}
    </BaseButton>
  );

  function handleClick() {
    onClick();
  }
}
