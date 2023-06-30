import * as React from 'react';
import { useSelector } from 'react-redux';
import { AdminPanel } from '../../adminPanel/components/AdminPanel';
import { ArticlesPanelContainer } from '../../articles';
import { ItemsPanelContainer } from '../../items/components/ItemsPanelContainer';
import { MainAreaLayout } from './MainAreaLayout';

export default function MainAreaContainer() {
  const adminPanel = useSelector((state: { adminPanel }) => state.adminPanel);
  const { showAdminPanel } = adminPanel;

  return (
    <>
      <MainAreaLayout
        panelLeft={<ItemsPanelContainer />}
        panelRight={<ArticlesPanelContainer />}
      />
      <AdminPanel isShown={showAdminPanel} />
    </>
  );
}
