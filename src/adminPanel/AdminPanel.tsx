import * as React from 'react';
import './AdminPanel.scss';

export function AdminPanel({ isShown = false }) {
  return <div className="admin-panel" data-state={isShown ? 'open' : 'closed'}></div>;
}
