import * as React from 'react';
import { useRef } from 'react';
import { useRippleEventHandlers } from '../../hooks';
import './MenuButton.scss';

export function MenuButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  additionalCssClass = ''
}) {
  const ref = useRef(null);
  const cssClasses = `button--basket-item ${additionalCssClass}`;
  const { onMouseDown, onTouchStart } = useRippleEventHandlers(ref);

  return (
    <div
      key={id}
      className={cssClasses}
      role="button"
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      ref={ref}
    >
      {label}
    </div>
  );

  function handleClick(e) {
    onClick();
  }
}
