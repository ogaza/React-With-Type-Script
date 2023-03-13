import * as React from 'react';
import './ItemTail.scss';

export function ItemTail({ id, text, onClick, enabled }) {
  const cssClass = enabled ? '' : 'item-tail--disabled';

  return (
    <figure className={`item-tail ${cssClass}`} role="button" onClick={handleClick}>
      <img className="item-tail__picture" src="" />
      <div className="divider"></div>
      <figcaption className="item-tail__caption">{text}</figcaption>
    </figure>
  );

  function handleClick() {
    onClick(text);
  }
}
