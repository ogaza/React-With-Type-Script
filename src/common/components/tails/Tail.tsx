import * as React from 'react';
import './Tail.scss';

export function Tail({ id, label, onClick, enabled }) {
  const cssClass = enabled ? '' : 'item-tail--disabled';

  return (
    <figure className={`item-tail ${cssClass}`} role="button" onClick={handleClick}>
      <img className="item-tail__picture" src="" />
      <div className="divider"></div>
      <figcaption className="item-tail__caption">{label}</figcaption>
    </figure>
  );

  function handleClick() {
    enabled && onClick(label);
  }
}
