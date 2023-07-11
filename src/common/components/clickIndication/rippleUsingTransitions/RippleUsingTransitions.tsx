import * as React from 'react';
import { useRef } from 'react';
import './RippleUsingTransitions.scss';

export function useRippleEventHandlers(ref) {
  const handleEvent = getEventHandler(ref.current);

  return {
    onMouseDown: handleEvent,
    onMouseUp: handleEvent,
    onMouseLeave: handleEvent,
    onTouchStart: handleEvent,
    onTouchEnd: handleEvent,
    onClick: handleEvent
  };
}

export function RippleUsingTransitions({ children }) {
  const ref = useRef(null);

  const handleEvent = getEventHandler(ref.current);

  return (
    <div
      className="ripple"
      onMouseDown={handleEvent}
      onMouseUp={handleEvent}
      onMouseLeave={handleEvent}
      onTouchStart={handleEvent}
      onTouchEnd={handleEvent}
      onClick={handleEvent}
      ref={ref}
    >
      {children}
    </div>
  );
}

function getEventHandler(htmlElem) {
  return function handleEvent(e) {
    e.stopPropagation();

    setElementDataStateAttributeBasedOnEventType(htmlElem, e.type);

    if (e.type === 'mouseup') {
      return;
    }

    setEventCoordinatesInElementProperties(htmlElem, getEventCoordinates(e));
  };
}

//=================================================================================================

const dataStateFor = {
  mousedown: 'pressed',
  touchstart: 'pressed',
  click: 'clicked'
};
function setElementDataStateAttributeBasedOnEventType(htmlElement, eventType) {
  if (!htmlElement) return;

  const dataState = dataStateFor[eventType];

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
