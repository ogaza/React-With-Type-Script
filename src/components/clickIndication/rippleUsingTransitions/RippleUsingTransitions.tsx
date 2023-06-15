import * as React from 'react';
import { useRef } from 'react';
import './RippleUsingTransitions.scss';

export function RippleUsingTransitions({ children }) {
  const wrapperRef = useRef(null);

  return (
    <div
      className="ripple-using-after"
      onMouseDown={handleEvent}
      onMouseUp={handleEvent}
      onMouseLeave={handleEvent}
      onTouchStart={handleEvent}
      onTouchEnd={handleEvent}
      onClick={handleEvent}
      ref={wrapperRef}
    >
      {children}
    </div>
  );

  function handleEvent(e) {
    setElementDataStateAttributeBasedOnEventType(wrapperRef.current, e.type);

    if (e.type === 'mouseup' || e.type === 'mouseup') {
      return;
    }

    setEventCoordinatesInElementProperties(wrapperRef.current, getEventCoordinates(e));
  }
}

//=================================================================================================

export function setElementDataStateAttributeBasedOnEventType(htmlElement, eventType) {
  if (!htmlElement) return;

  switch (eventType) {
    case 'mousedown':
    case 'touchstart':
      htmlElement.dataset.state = 'pressed';
      break;
    case 'mouseup':
    case 'touchend':
      htmlElement.removeAttribute('data-state');
      break;
    case 'click':
      htmlElement.dataset.state = 'clicked';
      break;
    default:
      break;
  }
}

export function setEventCoordinatesInElementProperties(htmlElement, eventCoordinates) {
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
