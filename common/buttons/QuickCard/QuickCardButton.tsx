import * as React from 'react';
import IconCard from '../../../styles/icons/icon_mop_card.svg';
import { BaseButton } from '../BaseButton/BaseButton';
import './QuickCardButton.scss';

export function QuickCardButton() {
  return (
    <BaseButton additionalCssClass="button--quick-card button--round">
      <IconCard />
    </BaseButton>
  );
}
