import * as React from 'react';
import { useRef } from 'react';
import { useRippleEventHandlers } from '../../hooks';
import IconBasketMore from '../../../styles/icons/icon_lock.svg';

import './BaseButton.scss';

const permissionStates = {
  none: 1,
  locked: 2
};

export function BaseButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  onMouseDown = () => {},
  onTouchStart = () => {},
  additionalCssClass = '',
  // permissionState = permissionStates.none
  permissionState = permissionStates.locked
}) {
  const ref = useRef(null);
  let cssClasses = `button--base ${additionalCssClass}`;
  cssClasses += permissionState === permissionStates.locked ? ' button--locked' : '';
  const { onMouseDown: use_onMouseDown, onTouchStart: use_onTouchStart } =
    useRippleEventHandlers(ref);

  return (
    <div
      key={id}
      className={cssClasses}
      role="button"
      onClick={createHandleClick({ onClick })}
      onMouseDown={createHandleMouseDown({ onMouseDown })}
      onTouchStart={createHandleTouchStart({ onTouchStart })}
      ref={ref}
    >
      <div>{label}</div>
      <div className="icon">
        <IconBasketMore />
      </div>
    </div>
  );

  function createHandleClick(otherHandlers, disabled = false) {
    const { onClick } = otherHandlers;

    return (event: React.MouseEvent) => {
      if (!disabled) {
        console.log('clicked');
        onClick?.(event);
      }
    };
  }

  function createHandleMouseDown(otherHandlers, disabled = false) {
    const { onMouseDown } = otherHandlers;

    return (event: React.MouseEvent) => {
      if (!disabled) {
        use_onMouseDown(event);
        onMouseDown?.(event);
      }
    };
  }

  function createHandleTouchStart(otherHandlers, disabled = false) {
    const { onTouchStart } = otherHandlers;

    return (event: React.TouchEvent) => {
      if (!disabled) {
        use_onTouchStart(event);
        onTouchStart?.(event);
      }
    };
  }
}

// export type EventHandlers = Record<string, React.EventHandler<any>>;

// function createHandleClick(otherHandlers: EventHandlers, disabled = false) {
//   return (event: React.MouseEvent) => {
//     if (!disabled) {
//       otherHandlers.onClick?.(event);
//     }
//   };
// }
