import * as React from 'react';
import { useRef } from 'react';
import { useRippleEventHandlers } from '../../hooks';
import IconLock from '../../../styles/icons/icon_lock.svg';
import IconMore from '../../../styles/icons/icon_more.svg';

import './BaseButton.scss';

export const permissionStates = {
  none: 1,
  locked: 2,
  requested: 3
};

export function BaseButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  onMouseDown = () => {},
  onTouchStart = () => {},
  additionalCssClass = '',
  permissionState = permissionStates.none
}) {
  const ref = useRef(null);
  let cssClasses = `button--base ${additionalCssClass}`;

  // permissions
  const locked = permissionState === permissionStates.locked;
  const requested = permissionState === permissionStates.requested;

  cssClasses += locked ? ' permission permission--locked' : '';
  cssClasses += requested ? ' permission permission--requested' : '';

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
      {locked && (
        <div className="permission__icon icon--locked">
          <IconLock />
        </div>
      )}
      {requested && (
        <div className="permission__icon icon--requested">
          <IconMore />
        </div>
      )}
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
