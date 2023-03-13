import * as React from 'react';
import { ItemsPanelContainer } from '../items/components/ItemsPanelContainer';
import { AddItemPanelContainer } from '../items/components/AddItemPanelContainer';
import { MainAreaLayout } from './MainArea/MainAreaLayout';

export default function MainAreaContainer() {
  return (
    <MainAreaLayout panelLeft={<ItemsPanelContainer />} panelRight={<AddItemPanelContainer />} />
  );
}
