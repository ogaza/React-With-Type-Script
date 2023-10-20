import * as React from 'react';
import { BaseButton, permissionStates } from '../BaseButton/BaseButton';
import './BasketOptionButton.scss';

export function BasketOptionButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  permissionState = null
}) {
  return (
    <BaseButton
      additionalCssClass="button--basket-option button--square"
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
