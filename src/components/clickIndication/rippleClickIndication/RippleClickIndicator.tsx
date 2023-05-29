import * as React from 'react';
import { useRef } from 'react';
import './RippleClickIndicator.scss';

export function WithRipleClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);

    const css = `ripple-click-indicator__container ${additionalCssClass}`;

    return (
      <div
        className={css}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        <Component {...props} />
      </div>
    );

    function handleClick(e) {
      e.stopPropagation();
      const ripple = wrapperRef.current.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }

      const circle = document.createElement('span');
      circle.classList.add('ripple');

      const child = wrapperRef.current.children[0];

      child.appendChild(circle);
    }

    function handleMouseDown(e) {
      e.stopPropagation();
      const x = e.clientX;
      const y = e.clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();
      wrapperRef.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
      wrapperRef.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

      wrapperRef.current.classList.add('active');
    }

    function handleMouseUp(e) {
      e.stopPropagation();
      wrapperRef.current.classList.remove('active');
    }

    function handleTouchStart(e) {
      e.stopPropagation();
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      wrapperRef.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
      wrapperRef.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

      wrapperRef.current.classList.add('active');
    }

    function handleTouchEnd(e) {
      e.stopPropagation();
      wrapperRef.current.classList.remove('active');
    }
  };
}
