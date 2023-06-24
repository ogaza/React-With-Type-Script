import * as React from 'react';
import { useSelector } from 'react-redux';
import { AdminPanel } from '../adminPanel/AdminPanel';
import { AddItemPanelContainer } from '../items/components/AddItemPanelContainer';
import { ItemsPanelContainer } from '../items/components/ItemsPanelContainer';
import { MainAreaLayout } from './MainArea/MainAreaLayout';

export default function MainAreaContainer() {
  const adminPanel = useSelector((state: { adminPanel }) => state.adminPanel);
  const { showAdminPanel } = adminPanel;

  return (
    <>
      <MainAreaLayout panelLeft={<ItemsPanelContainer />} panelRight={<AddItemPanelContainer />} />
      {<AdminPanel isShown={showAdminPanel} />}
    </>
  );
}
