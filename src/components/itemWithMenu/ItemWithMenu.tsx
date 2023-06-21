import { RippleUsingTransitions } from '../clickIndication';
import * as React from 'react';
import { useState } from 'react';
import './ItemWithMenu.scss';

export function ItemWithMenu({ name, price, quantity, value }) {
  const [menuIsShown, setShowMenu] = useState(false);

  return (
    <div className={'basket-item'}>
      <div className="basket-item__element basket-item__name">{name}</div>
      <div className="basket-item__element basket-item__price">{price}</div>
      <div className="basket-item__element basket-item__quantity">{quantity}</div>
      <div className="basket-item__element basket-item__value">{value}</div>
      <div className="basket-item__element basket-item__actions">
        <ActionsButton onClick={handleActiionsButtonClick} />
      </div>
      {
        <ItemMenu
          label={'menu option 1'}
          isOpen={menuIsShown}
          onCloseButtonClick={() => {
            setShowMenu(false);
          }}
        />
      }
    </div>
  );

  function handleActiionsButtonClick() {
    setShowMenu(!menuIsShown);
  }
}

function ItemMenu({ label, onCloseButtonClick, isOpen }) {
  return (
    <div className={'basket-item-menu'} data-state={isOpen ? 'open' : 'closed'}>
      <div
        className="basket-item-menu__element basket-item-menu__button--close"
        role="button"
        onClick={onCloseButtonClick}
      >
        <div className="basket-item-menu__icon--close">+</div>
      </div>
      <div className="basket-item-menu__element basket-item-menu__element">{label}</div>
    </div>
  );
}

function ActionsButton({ onClick }) {
  return (
    <div className={'button--item-actions'} role="button" onClick={handleClick}>
      <div key={1} className="dot"></div>
      <div key={2} className="dot"></div>
      <div key={3} className="dot"></div>
    </div>
  );

  function handleClick() {
    console.log('clicked');
    onClick();
  }
}

export function BasketItems({ items }) {
  return (
    <div className="basket-items">
      {items.map((x) => (
        <>
          <ItemWithMenu {...x} key={x.id} />
          <ItemDivider key={`divider-${x.id}`} />
        </>
      ))}
    </div>
  );
}

function ItemDivider() {
  return <hr className="divider--item"></hr>;
}
