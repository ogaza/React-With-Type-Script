import { RippleUsingTransitions } from '../clickIndication';
import { Quantity } from './components';
import * as React from 'react';
import { useState } from 'react';
import './ItemWithMenu.scss';

export function ItemWithMenu({
  id,
  name,
  price,
  quantity,
  value,
  onChange,
  menuOptions = []
}) {
  const [menuIsShown, setShowMenu] = useState(false);

  return (
    <div className={'basket-item'}>
      <div className="basket-item__element basket-item__name">{name}</div>
      <div className="basket-item__element basket-item__price">
        <div className="basket-item__price-value">{price}</div>
        <div className="basket-item__price-icon">+</div>
      </div>
      <div className="basket-item__element basket-item__quantity">
        <Quantity value={quantity} onChange={handleQuantityChange} />
      </div>
      <div className="basket-item__element basket-item__value">{value}</div>
      <div className="basket-item__element basket-item__actions"></div>
      {
        <ItemMenu
          isOpen={menuIsShown}
          onCloseButtonClick={handleActiionsButtonClick}
          menuOptions={menuOptions}
        />
      }
    </div>
  );

  function handleQuantityChange(newQuantity) {
    console.log('value changed to:', newQuantity);
    onChange({ id, quantity: newQuantity });
  }

  function handleActiionsButtonClick() {
    setShowMenu(!menuIsShown);
  }
}

function ItemMenu({ onCloseButtonClick, isOpen, menuOptions = [] }) {
  return (
    <div className={'item-menu'} data-state={isOpen ? 'open' : 'closed'}>
      <CloseMenuButton onClick={onCloseButtonClick} menuIsOpen={isOpen} />
      <OpenMenuButton onClick={onCloseButtonClick} menuIsOpen={isOpen} />
      <div className="item-menu__content">
        {menuOptions.map((x) => (
          <div className="item-menu__element-wrapper">
            <MenuButton
              key={x.id}
              {...x}
              onClick={getMenuButtonClickHandlerFor(x.onClick, x.closeMenuOnClick)}
            />
            <VerticalDivider />
          </div>
        ))}
      </div>
    </div>
  );

  function getMenuButtonClickHandlerFor(onClick, closeMenuOnClick) {
    return function handleMenuButtonClick() {
      onClick();
      !!closeMenuOnClick && onCloseButtonClick();
    };
  }
}

function MenuButton({ id, label, onClick = () => {} }) {
  return (
    <div
      key={id}
      className="button--basket-item"
      role="button"
      onClick={handleClick}
    >
      {label}
    </div>
  );

  function handleClick() {
    onClick();
  }
}

function OpenMenuButton({ onClick, menuIsOpen }) {
  return (
    <div
      className={'item-menu__button--open'}
      role="button"
      onClick={handleClick}
      data-state={menuIsOpen ? 'open' : 'closed'}
    >
      <div key={1} className="dot"></div>
      <div key={2} className="dot"></div>
      <div key={3} className="dot"></div>
    </div>
  );

  function handleClick() {
    onClick();
  }
}

function CloseMenuButton({ onClick, menuIsOpen }) {
  return (
    <div
      className="item-menu__button--close"
      role="button"
      onClick={handleClick}
      data-state={menuIsOpen ? 'open' : 'closed'}
    >
      <div className="item-menu__icon--close">+</div>
    </div>
  );

  function handleClick() {
    onClick();
  }
}

export function BasketItems({ children }) {
  return <div className="basket-items">{children}</div>;
}

export function VerticalDivider() {
  return <div className="vertical-divider"></div>;
}
