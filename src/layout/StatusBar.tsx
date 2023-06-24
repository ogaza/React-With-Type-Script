import * as React from 'react';
import './StatusBar.scss';
import { toggleAdminPanel } from '../adminPanel/actions';
import { useDispatch } from 'react-redux';

export default function StatusBar() {
  const dispatch = useDispatch();

  return (
    <div className="status-bar">
      <section className="status-bar__info">
        <div>Simple POS</div>
      </section>
      <section className="status-bar__items"></section>
      <section className="status-bar__actions">
        <div role="button" onClick={handleClick}>
          Menu
        </div>
      </section>
    </div>
  );

  function handleClick() {
    dispatch(toggleAdminPanel());
  }
}
