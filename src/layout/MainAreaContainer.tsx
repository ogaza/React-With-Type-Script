import * as React from 'react';
import { AddItemPanelContainer, ItemsPanelContainer } from '../items/components/ItemPanels';
import { MainAreaLayout } from './MainArea/MainAreaLayout';

export default function MainAreaContainer() {
  return (
    <MainAreaLayout panelLeft={<ItemsPanelContainer />} panelRight={<AddItemPanelContainer />} />
  );
}
