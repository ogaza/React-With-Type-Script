import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAdminPanel } from '../../adminPanel/actions';
import './StatusBar.scss';

export default function StatusBar() {
  const dispatch = useDispatch();
  const adminPanel = useSelector((state: { adminPanel }) => state.adminPanel);
  const { showAdminPanel: adminPanelIsShown } = adminPanel;

  return (
    <div className="status-bar">
      <section className="status-bar__info">
        <div>POS</div>
        <Clock />
      </section>
      <section className="status-bar__items"></section>
      <section className="status-bar__actions">
        <AppMenuButton
          onClick={handleMenuButtonClick}
          dataState={adminPanelIsShown ? 'open' : 'closed'}
        />
      </section>
    </div>
  );

  function handleMenuButtonClick() {
    dispatch(toggleAdminPanel());
  }
}

function AppMenuButton({ onClick, dataState }) {
  return (
    <div role="button" className="app-menu-button" onClick={handleClick} data-state={dataState}>
      <div className="squares">
        <div className="square__container">
          <div className="square"></div>
        </div>
        <div className="square__container">
          <div className="square"></div>
        </div>
        <div className="square__container">
          <div className="square"></div>
        </div>
        <div className="square__container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    onClick();
  }
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}
