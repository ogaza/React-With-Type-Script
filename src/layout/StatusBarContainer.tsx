import * as React from 'react';
import './StatusBar.scss';
import { toggleAdminPanel } from '../adminPanel/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function StatusBarContainer() {
  const dispatch = useDispatch();

  return (
    <section className="status-bar">
      <div>Simple POS</div>
      <div role="button" onClick={handleClick}>
        Menu
      </div>
    </section>
  );

  function handleClick() {
    dispatch(toggleAdminPanel());
  }
}
