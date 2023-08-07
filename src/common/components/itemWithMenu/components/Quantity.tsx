import * as React from 'react';
import { useRef } from 'react';
import { useRippleEventHandlers } from '../../../../../common/hooks';
import './Quantity.scss';

export default function Quantity({ value, onChange }) {
  return (
    <div className="quantity">
      <ButtonValueChange onClick={onDecrement} label={'-'} />
      <div className="quantity__value">{value}</div>
      <ButtonValueChange onClick={onIncrement} label={'+'} />
    </div>
  );

  function onDecrement() {
    onChange(value - 1);
  }

  function onIncrement() {
    onChange(value + 1);
  }
}

function ButtonValueChange({ onClick, label }) {
  const ref = useRef(null);

  const rippleEventHandlers = useRippleEventHandlers(ref);

  return (
    <div
      className="quantity__button--change use-ripple"
      onClick={handleClick}
      {...rippleEventHandlers}
      ref={ref}
    >
      {label}
    </div>
  );

  function handleClick() {
    onClick();
  }
}
