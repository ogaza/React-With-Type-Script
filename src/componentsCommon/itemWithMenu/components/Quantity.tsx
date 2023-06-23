import * as React from 'react';
import './Quantity.scss';

export default function Quantity({ value, onChange }) {
  return (
    <div className="quantity">
      <div className="quantity__decrement" data-operation="decrement" onClick={handleClick}>
        -
      </div>
      <div className="quantity__value">{value}</div>
      <div className="quantity__increment" data-operation="increment" onClick={handleClick}>
        +
      </div>
    </div>
  );

  function handleClick(e) {
    const operation = e.target.dataset?.operation || '';
    const diff = operation === 'increment' ? 1 : -1;

    onChange(value + diff);
  }
}
