import * as React from 'react';
import IconCard from '../../../styles/icons/icon_mop_card.svg';
import { BaseButton, permissionStates } from '../BaseButton/BaseButton';
import './QuickCardButton.scss';

export function QuickCardButton({ permissionState = null }) {
  return (
    <BaseButton
      additionalCssClass="button--quick-card button--round"
      permissionState={permissionState ? permissionState : permissionStates.allowed}
    >
      <IconCard />
    </BaseButton>
  );
}
