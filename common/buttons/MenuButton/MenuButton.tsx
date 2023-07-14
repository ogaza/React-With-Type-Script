import * as React from 'react';
import { useRef } from 'react';
import './MenuButton.scss';

export function MenuButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  additionalCssClass = ''
}) {
  const ref = useRef(null);
  const cssClasses = `button--basket-item ${additionalCssClass}`;

  return (
    <div
      key={id}
      className={cssClasses}
      role="button"
      onClick={handleClick}
      onMouseDown={handleEvent}
      onTouchStart={handleEvent}
      ref={ref}
    >
      {label}
    </div>
  );

  function handleClick(e) {
    onClick();
  }

  function handleEvent(e) {
    const eventCoordinates = getEventCoordinates(e);
    const eventCoordinatesWithinElement = getEventCoordinatesWithinElement(
      ref.current,
      eventCoordinates
    );
    setCoordinatesAsProperties(ref.current, eventCoordinatesWithinElement);
  }
}

export function setCoordinatesAsProperties(htmlElement, propValues) {
  if (!htmlElement) return;

  const [x, y] = propValues;

  x && htmlElement.style.setProperty('--x', `${x}`);
  y && htmlElement.style.setProperty('--y', `${y}`);
}

export function getEventCoordinatesWithinElement(htmlElement, eventCoordinates) {
  const [x, y] = eventCoordinates;
  const boundingClientRect = htmlElement.getBoundingClientRect();

  return [x - boundingClientRect.left, y - boundingClientRect.top];
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
