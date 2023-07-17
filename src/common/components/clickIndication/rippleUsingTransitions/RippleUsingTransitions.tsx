import * as React from 'react';
import { useRef } from 'react';
import './RippleUsingTransitions.scss';

export function useRippleEventHandlers(ref) {
  return {
    onMouseDown: handleEvent,
    onMouseUp: handleEvent,
    onMouseLeave: handleEvent,
    onTouchStart: handleEvent,
    onTouchEnd: handleEvent
  };

  function handleEvent(e) {
    e.stopPropagation();
    setElementDataStateAttributeBasedOnEventType(ref.current, e.type);
    setEventCoordinatesInElementProperties(ref.current, getEventCoordinates(e));
  }
}

export function RippleUsingTransitions({ children }) {
  const ref = useRef(null);

  return (
    <div
      className="ripple--in-wrapper"
      onMouseDown={handleEvent}
      onMouseUp={handleEvent}
      onMouseLeave={handleEvent}
      onTouchStart={handleEvent}
      onTouchEnd={handleEvent}
      ref={ref}
    >
      {children}
    </div>
  );

  function handleEvent(e) {
    e.stopPropagation();
    setElementDataStateAttributeBasedOnEventType(ref.current, e.type);
    setEventCoordinatesInElementProperties(ref.current, getEventCoordinates(e));
  }
}

//=================================================================================================

const dataStateFor = {
  mousedown: 'pressed',
  mouseup: 'clicked',
  touchstart: 'pressed'
};
function setElementDataStateAttributeBasedOnEventType(htmlElement, eventType) {
  if (!htmlElement) return;

  const dataState = dataStateFor[eventType];

  if (eventType === 'mouseup' && htmlElement.dataset.state !== 'pressed') {
    return;
  }

  if (dataState) {
    htmlElement.dataset.state = dataState;
    return;
  }
  htmlElement.removeAttribute('data-state');
}

export function setEventCoordinatesInElementProperties(
  htmlElement,
  eventCoordinates
) {
  if (!htmlElement) return;

  const [x, y] = eventCoordinates;
  const boundingClientRect = htmlElement.getBoundingClientRect();

  x && htmlElement.style.setProperty('--x', `${x - boundingClientRect.left}px`);
  y && htmlElement.style.setProperty('--y', `${y - boundingClientRect.top}px`);
}

export function getEventCoordinates(e) {
  switch (e.type) {
    case 'mousedown':
      return [e.clientX, e.clientY];
    case 'touchstart': {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      return [x, y];
    }
    default:
      return [];
  }
}
