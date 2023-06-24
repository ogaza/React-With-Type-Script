import * as React from 'react';
import { useState, useEffect } from 'react';
import './StatusBar.scss';
import { toggleAdminPanel } from '../adminPanel/actions';
import { useDispatch } from 'react-redux';

export default function StatusBar() {
  const dispatch = useDispatch();

  return (
    <div className="status-bar">
      <section className="status-bar__info">
        <div>POS</div>
        <Clock />
      </section>
      <section className="status-bar__items"></section>
      <section className="status-bar__actions">
        <AppMenuButton onClick={handleMenuButtonClick} />
      </section>
    </div>
  );

  function handleMenuButtonClick() {
    dispatch(toggleAdminPanel());
  }
}

function AppMenuButton({ onClick }) {
  return (
    <div role="button" className="app-menu-button" onClick={handleClick}>
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
