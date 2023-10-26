import * as React from 'react';
import { useRef } from 'react';
import { useRippleEventHandlers } from '../../hooks';
import IconLock from '../../../styles/icons/icon_lock.svg';
import IconMore from '../../../styles/icons/icon_more.svg';

import './BaseButton.scss';

export const permissionStates = {
  notAllowed: 0,
  allowed: 1,
  onDemand: 2,
  requested: 3
};

export const loadingStates = {
  none: 1,
  loading: 2
};

export function BaseButton({
  id = 0,
  label = '',
  onClick = () => {},
  onMouseDown = () => {},
  onTouchStart = () => {},
  additionalCssClass = '',
  enabled = true,
  permissionState = permissionStates.allowed,
  loadingState = loadingStates.none,
  children = null
}) {
  const ref = useRef(null);
  let cssClasses = `button--base use-ripple ${additionalCssClass}`;

  // permissions
  const locked = permissionState === permissionStates.onDemand;
  const requested = permissionState === permissionStates.requested;

  cssClasses += locked ? ' permission permission--locked' : '';
  cssClasses += requested ? ' permission permission--requested' : '';

  // loading
  const isLoading = loadingState === loadingStates.loading;
  cssClasses += isLoading ? ' button--loading' : '';

  // enablement
  const disabled = !enabled || permissionState === permissionStates.notAllowed;
  cssClasses += disabled ? ' button--disabled' : '';

  const { onMouseDown: use_onMouseDown, onTouchStart: use_onTouchStart } =
    useRippleEventHandlers(ref);

  return (
    <div
      key={id}
      className={cssClasses}
      role="button"
      onClick={disabled ? null : createHandleClick({ onClick })}
      onMouseDown={disabled ? null : createHandleMouseDown({ onMouseDown })}
      onTouchStart={disabled ? null : createHandleTouchStart({ onTouchStart })}
      ref={ref}
    >
      {isLoading ? <div>loading...</div> : <div>{label}</div>}
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
      {children}
    </div>
  );

  function createHandleClick(otherHandlers) {
    const { onClick } = otherHandlers;

    return (event: React.MouseEvent) => {
      onClick?.(event);
    };
  }

  function createHandleMouseDown(otherHandlers) {
    const { onMouseDown } = otherHandlers;

    return (event: React.MouseEvent) => {
      use_onMouseDown(event);
      onMouseDown?.(event);
    };
  }

  function createHandleTouchStart(otherHandlers) {
    const { onTouchStart } = otherHandlers;

    return (event: React.TouchEvent) => {
      use_onTouchStart(event);
      onTouchStart?.(event);
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
